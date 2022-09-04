/* eslint-disable react-hooks/rules-of-hooks */
import React, { isValidElement, memo, useState, useMemo, ReactNode, useContext } from 'react'
import { run, isString, isObject } from '@cjy0208/tools'
import { useControllableValue } from 'ahooks'
import { EllipsisOutlined } from '@ant-design/icons'
import { ButtonProps, PopconfirmProps, SwitchProps, TooltipProps, Menu, MenuProps, Dropdown, MenuItemProps } from 'antd'
// import SizeContext from 'antd/es/config-provider/SizeContext'

import DropdownButton from './DropdownButton'
import Button from './Button'
import Switch from './Switch'
import Popconfirm from './Popconfirm'
import Tooltip, { TooltipConfig } from './Tooltip'
import Hook from './Hook'
import { isArray } from 'lodash'

export type ConfirmConfig = string | PopconfirmProps

export interface ActionMenuItemProps extends MenuItemProps {
  key?: any
}

export interface ButtonActionType extends Omit<ButtonProps, 'children'> {
  actionType?: 'button'
  content?: ButtonProps['children']
  children?: ButtonProps['children']
  confirm?: ConfirmConfig
  tooltip?: TooltipConfig
  extraConfirmProps?: Omit<PopconfirmProps, 'title'>
  extraTooltipProps?: Omit<TooltipProps, 'title' | 'overlay'>
  menu?: ActionMenuItemProps[] | MenuProps['children']
  menuIcon?: ButtonProps['icon']
  onMenuClick?: MenuProps['onClick']
}
export interface SwitchActionType extends SwitchProps {
  actionType?: 'switch'
  content?: any
  children?: any
  confirm?: ConfirmConfig
  tooltip?: TooltipConfig
  extraConfirmProps?: Omit<PopconfirmProps, 'title'>
  extraTooltipProps?: Omit<TooltipProps, 'title' | 'overlay'>
}

export type ActionProps = ButtonActionType | SwitchActionType

const renderAction = ({ actionType = 'button', content: contentConfig, ...actionProps }: any = {}) => {
  let content = contentConfig
  if (actionType === 'switch') {
    const { onClick, onChange } = actionProps ?? {}
    delete actionProps.onClick
    delete actionProps.onChange

    const changeHandler = onClick ?? onChange

    return (
      <Switch
        {...actionProps}
        onChange={changeHandler ? (...args: any[]) => run(changeHandler, undefined, ...args) : null}
      />
    )
  }

  if (actionType === 'button') {
    delete actionProps.checked

    if (isArray(actionProps.menu)) {
      const hasContent = !!content
      const Element = hasContent ? DropdownButton : Dropdown
      content = hasContent ? content : <Button icon={<EllipsisOutlined />} {...actionProps} />
      if (isValidElement(actionProps.menu?.[0])) {
        return (
          <Element
            overlay={<Menu onClick={actionProps?.onMenuClick}>{actionProps.menu.filter(isValidElement)}</Menu>}
            {...actionProps}
          >
            {content}
          </Element>
        )
      }

      if (isObject(actionProps.menu?.[0])) {
        return (
          <Element
            overlay={
              <Menu onClick={actionProps?.onMenuClick}>
                {actionProps.menu.map(({ label, ...props }: any, idx: number) => (
                  <Menu.Item key={idx} {...props}>
                    {label}
                  </Menu.Item>
                ))}
              </Menu>
            }
            {...actionProps}
          >
            {content}
          </Element>
        )
      }
    }

    delete actionProps.menu
    return <Button {...actionProps}>{content}</Button>
  }

  return null
}

export const Action = memo(function Action(props: ActionProps) {
  const {
    children,
    content = children,
    confirm,
    onClick,
    tooltip,
    extraConfirmProps = {},
    extraTooltipProps = {},
    ...actionProps
  } = props

  if (!!confirm) {
    return (
      <Hook>
        {() => {
          // 用来解决 tooltip 和 popconfirm 同时显示的位置冲突问题
          const [showTooltip, setTooltipShow] = useState(true)

          // 内部 Switch checked 状态受控，主要用来控制 Switch + Popupconfirm 的场景
          const [checked, setChecked] = useControllableValue(actionProps, {
            valuePropName: 'checked',
            defaultValuePropName: 'defaultChecked',
            defaultValue: false,
            trigger: undefined,
          })

          const confirmProps = useMemo(() => {
            if (isString(confirm) || isValidElement(confirm)) {
              return { title: confirm }
            }

            return { ...confirm }
          }, [confirm])

          const actionNode = renderAction({ content, checked, ...actionProps })

          return (
            <Popconfirm
              disabled={actionProps?.disabled}
              onVisibleChange={visible => setTooltipShow(!visible)}
              destroyTooltipOnHide
              {...extraConfirmProps}
              {...confirmProps}
              onConfirm={async () => {
                await run(onClick)
                setChecked(!checked)
              }}
            >
              <Tooltip config={tooltip} visible={showTooltip ? undefined : false} {...extraTooltipProps}>
                {actionNode}
              </Tooltip>
            </Popconfirm>
          )
        }}
      </Hook>
    )
  }

  const actionNode = renderAction({ content, onClick, ...actionProps })

  return (
    <Tooltip config={tooltip} {...extraTooltipProps}>
      {actionNode}
    </Tooltip>
  )
})

export default Action

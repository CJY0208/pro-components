import React, { isValidElement, forwardRef, cloneElement } from 'react'
import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from 'antd'
import { AbstractTooltipProps } from 'antd/es/tooltip'
import { InfoCircleOutlined } from '@ant-design/icons'
import { isObject, isString, isFunction, run, isExist } from '@cjy0208/tools'

import hoistStatic from 'hoist-non-react-statics'

export type TooltipConfig = string | React.ReactNode | AntdTooltipProps

export interface TooltipProps extends AbstractTooltipProps {
  title?: AntdTooltipProps['title']
  overlay?: AntdTooltipProps['overlay']
  config?: TooltipConfig
  children?: any
  content?: any
}

export const Tooltip = hoistStatic(
  forwardRef(function Tooltip(props: TooltipProps, ref) {
    // return <AntdTooltip ref={ref} destroyTooltipOnHide {...props} />

    const { config = props?.title, content: propContent = null, children = propContent, ...extraProps } = props

    // 无 tooltip 时返回 null
    if (!isExist(config)) {
      return (
        <AntdTooltip ref={ref} visible={false} title="" {...extraProps}>
          {children}
        </AntdTooltip>
      )
    }

    const content = (config as any)?.content ?? (config as any)?.children ?? children ?? <InfoCircleOutlined />

    // 快捷内容
    if (isString(config) || isValidElement(config)) {
      return (
        <AntdTooltip ref={ref} destroyTooltipOnHide title={config} {...extraProps}>
          {content}
        </AntdTooltip>
      )
    }

    // 配置式 tooltip
    if (isObject(config)) {
      return (
        <AntdTooltip ref={ref} destroyTooltipOnHide {...(config as AntdTooltipProps)} {...extraProps}>
          {content}
        </AntdTooltip>
      )
    }

    // 非法内容
    return <AntdTooltip ref={ref} visible={false} title="" {...extraProps} />
  }),
  AntdTooltip,
)

export interface RenderTooltipConfig extends TooltipProps {
  ref?: any
}

export const renderTooltip = (tooltipConfig: RenderTooltipConfig) => {
  return <Tooltip {...tooltipConfig} />
}

export default Tooltip

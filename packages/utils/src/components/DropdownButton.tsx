import React, { forwardRef, cloneElement } from 'react'
import { pick, delay } from '@cjy0208/tools'
import { Dropdown, ButtonProps } from 'antd'
import { DropdownButtonProps as AntdDropdownButtonProps } from 'antd/es/dropdown/dropdown-button'
import hoistStatics from 'hoist-non-react-statics'

import useAutoLoading from '../hooks/useAutoLoading'

export interface DropdownButtonProps extends Omit<AntdDropdownButtonProps, 'onClick'> {
  menuIcon?: ButtonProps['icon']
}
export interface DropdownButtonProps extends ButtonProps {}

const DropdownButton: React.FC<DropdownButtonProps> = hoistStatics(
  forwardRef(function DropdownButton(props: DropdownButtonProps, ref: any) {
    const { onAction, loading } = useAutoLoading({
      loading: props?.loading,
      action: props?.onClick,
    })

    return (
      <Dropdown.Button
        // @ts-ignore
        // ref={ref as any}
        {...props}
        icon={props?.menuIcon}
        loading={loading}
        onClick={onAction}
        buttonsRender={([buttonNode, dropdownNode]: any) => [
          cloneElement(buttonNode, {
            ...props,
            ...buttonNode?.props,
          }),
          cloneElement(dropdownNode, {
            ...dropdownNode?.props,
            ...pick(props, ['type', 'danger']),
          }),
        ]}
      />
    )
  }),
  Dropdown.Button,
)

export default DropdownButton

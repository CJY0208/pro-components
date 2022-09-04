import React, { forwardRef } from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'
import hoistStatics from 'hoist-non-react-statics'

import useAutoLoading from '../hooks/useAutoLoading'

const Button: React.FC<ButtonProps> = hoistStatics(
  forwardRef(function Button(props: ButtonProps, ref: any) {
    const { onAction, loading } = useAutoLoading({
      loading: props?.loading,
      action: props?.onClick,
    })

    return <AntdButton ref={ref} {...props} loading={loading} onClick={onAction} />
  }),
  AntdButton,
)

export default Button

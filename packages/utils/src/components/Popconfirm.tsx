import React, { forwardRef } from 'react'
import { Popconfirm as AntdPopconfirm, PopconfirmProps } from 'antd'
import hoistStatics from 'hoist-non-react-statics'

import useAutoLoading from '../hooks/useAutoLoading'

const Popconfirm: React.FC<PopconfirmProps> = hoistStatics(
  forwardRef(function Popconfirm(props: PopconfirmProps, ref: any) {
    const { onAction, loading } = useAutoLoading({
      loading: props?.okButtonProps?.loading,
      action: props?.onConfirm,
    })

    return (
      <AntdPopconfirm
        ref={ref}
        arrowPointAtCenter
        {...props}
        okButtonProps={{
          ...props?.okButtonProps,
          loading,
        }}
        onConfirm={onAction}
      />
    )
  }),
  AntdPopconfirm,
)

export default Popconfirm

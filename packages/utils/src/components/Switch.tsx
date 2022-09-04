import React, { useState, forwardRef } from 'react'
import { Switch as AntdSwitch, SwitchProps } from 'antd'
import { useDebounce } from 'ahooks'
import { run } from '@cjy0208/tools'
import hoistStatics from 'hoist-non-react-statics'

import useAutoLoading from '../hooks/useAutoLoading'

const Switch: React.FC<SwitchProps> = hoistStatics(
  forwardRef((props, ref: any) => {
    const { onAction, loading } = useAutoLoading({
      loading: props?.loading,
      action: props?.onChange,
    })

    return <AntdSwitch ref={ref} {...props} loading={loading} onChange={onAction} />
  }),
  AntdSwitch,
)

export default Switch

/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef } from 'react'
import { Tooltip } from 'antd'
import { AbstractTooltipProps } from 'antd/es/tooltip'
import { useSize } from 'ahooks'

export interface EllipsisTooltipProps extends AbstractTooltipProps {
  children: any
}

export default function EllipsisTooltip({ children, ...props }: EllipsisTooltipProps) {
  const container = useRef<HTMLDivElement>(null)
  const { width = 0 } = useSize(container) ?? {}

  const isEllipsis = container.current!?.scrollWidth > width + 0 // 2 作为可接受的宽度误差值
  const disabled = !isEllipsis

  return (
    <Tooltip placement="top" title={children} {...props} visible={disabled ? false : undefined}>
      <span className="f-pro-utils-ellipsis-tooltip" ref={container}>
        {children}
      </span>
    </Tooltip>
  )
}

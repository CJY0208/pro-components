import React, { isValidElement } from 'react'
import { run, isObject } from '@cjy0208/tools'

export interface HookProps {
  hook?: (...args: any) => React.ReactNode
  children?: React.ReactNode | ((...args: any) => React.ReactNode)
}

export default function Hook(props: HookProps): JSX.Element | null {
  const children = run<JSX.Element>(props?.hook ?? props?.children) ?? null

  if (isObject(children) && !isValidElement(children)) {
    return null
  }

  return children
}

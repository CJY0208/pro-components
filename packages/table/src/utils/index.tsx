import React, { createContext, useContext, useRef } from 'react'
import { Result, Modal, ModalFuncProps } from 'antd'
import { classnames } from '@cjy0208/tools'

import {
  ErrorBoundary,
  Button,
  createSharedHook,
  createSharedContext,
  SharedHook,
  UseSharedHook,
  Merge,
} from '@cjy0208/pro-utils'
import { ProTableProps } from '../types'

const sharedContext = createSharedContext()

export interface TablePlugin<P, T = any> extends UseSharedHook<T> {
  props: P
}

export class ChainableTablePlugins<T = {}> {
  plugins: TablePlugin<any>[] = []
  constructor(extendPlugins: TablePlugin<any>[] = []) {
    this.plugins = [...extendPlugins]
  }
  add<P extends TablePlugin<any>>(plugin: P) {
    return new ChainableTablePlugins<Merge<T, P['props']>>([...this.plugins, plugin])
  }
  // @ts-ignore
  getPropsType(): T {}
  get(): TablePlugin<any>[] {
    return [...this.plugins]
  }
}

export function createPlugin<P, T extends any = any>(
  usePluginHook: SharedHook<T, P>,
  name?: string,
): TablePlugin<P, T> {
  const useHook = () => {
    const props = useProps<P>()

    return usePluginHook(props)
  }

  Object.defineProperty(useHook, 'name', {
    value: name ?? usePluginHook.name,
  })

  const useSharedHook = createSharedHook(useHook, {
    context: sharedContext,
  })

  Object.defineProperty(useSharedHook, 'name', {
    value: name ?? usePluginHook.name,
  })

  return Object.assign(useSharedHook, {
    props: {},
  }) as TablePlugin<P, T>
}

const propContext = createContext<any>({})
export function useProps<T = any>(): T {
  return useContext(propContext) as T
}

const defaultProps = {}

export const setDefaultProps = (configuareDefaultProps: ProTableProps = {}) => {
  Object.assign(defaultProps, configuareDefaultProps)
}

export const TableWrapper = ({ plugins = [], children, ...props }: any) => {
  const wrapperDomRef = useRef<HTMLDivElement>(null)
  const noBackgroundColor = props.noBackgroundColor ?? (props?.pure ? true : false)

  return (
    <ErrorBoundary>
      <propContext.Provider
        value={{
          ...defaultProps,
          ...props,
          wrapperDomRef,
        }}
      >
        <sharedContext.Provider value={props} filter={(model: any) => plugins.includes(model.hook)}>
          <div
            className={classnames('f-pro-table-wrapper', {
              ['f-pro-table-grey-body']: !noBackgroundColor,
            })}
            ref={wrapperDomRef}
          >
            {children}
          </div>
        </sharedContext.Provider>
      </propContext.Provider>
    </ErrorBoundary>
  )
}

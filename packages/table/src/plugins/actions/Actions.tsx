import React, { Fragment, isValidElement, memo } from 'react'
import { Space } from 'antd'
import { run, isString, isObject, isArray } from '@cjy0208/tools'

import Action from './Action'
import useActionPlugin from './index'

const defaultRenderActionConfig = (actionProps: any = {}) => <Action {...actionProps} />

const Actions = memo(function Actions({
  spaceSize,
  configs,
  getBuiltInActions,
  renderActionConfig = defaultRenderActionConfig,
  actionParams: getActionParams,
}: any) {
  useActionPlugin(({ builtInActions }) => [builtInActions]) // 监听 action 配置变化

  const builtInActions = getBuiltInActions()

  return configs?.length > 0 ? (
    <Space size={spaceSize}>
      {configs
        .map((getActionConfig: any, idx: any) => {
          const node = run<any>(() => {
            let actionParams: any[] = run(getActionParams)
            if (!isArray(actionParams)) {
              actionParams = [actionParams]
            }
            const actionConfig = run<any>(getActionConfig, undefined, ...actionParams)

            function renderBuiltInAction(builtInActionConfig: any): any {
              const { builtIn: actionName, ...restProps } = builtInActionConfig
              const builtInAction = run<any>(builtInActions, actionName, ...actionParams)

              if (isObject(builtInAction) && 'builtIn' in builtInAction) {
                return renderBuiltInAction({
                  ...builtInAction,
                  ...restProps,
                })
              }

              if (!!restProps?.content) {
                restProps.children = restProps.content
              }

              if (isValidElement(builtInAction)) {
                return React.cloneElement(builtInAction, restProps)
              }

              if (isObject(builtInAction)) {
                return {
                  ...builtInAction,
                  ...restProps,
                }
              }

              return builtInAction
            }

            // 尝试获取 builtInAction
            const action = run<any>(() => {
              if (isString(actionConfig)) {
                const builtInAction = run<any>(builtInActions, actionConfig, ...actionParams)
                if (isObject(builtInAction) && 'builtIn' in builtInAction) {
                  return renderBuiltInAction(builtInAction)
                }

                return builtInAction
              }

              if (isObject(actionConfig) && 'builtIn' in actionConfig) {
                return renderBuiltInAction(actionConfig)
              }

              return actionConfig
            })

            if (isValidElement(action)) {
              return action
            }

            if (isObject(action)) {
              return renderActionConfig(action)
            }

            return null
          })
          if (!node) {
            return undefined
          }

          return <Fragment key={idx}>{node}</Fragment>
        })
        .filter(Boolean)}
    </Space>
  ) : null
})

export default Actions

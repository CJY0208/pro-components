/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * defaultShowCode: true
 */
import React, { useEffect } from 'react'
import {
  createProTablePlugin,
  useProTableQueryFieldPlugin,
  useProTableActionsPlugin,
  createProTable,
  proTableBuiltInPlugins,
} from '@cjy0208/pro-components'
import '@cjy0208/pro-components/es/style.less'
import { useInterval, useToggle } from 'ahooks'
import { delay } from '@cjy0208/tools'

// 插件需要的表格 props
interface PollingPluginProps {
  defaultPolling?: boolean
  polling?: number
  actions?: ['toggle-polling']
}

const pollingPlugin = createProTablePlugin((props: PollingPluginProps) => {
  const { polling: pollingTimeout, defaultPolling = true } = props
  const [polling, { toggle }] = useToggle(defaultPolling)
  const { setTableActions } = useProTableActionsPlugin() // 用用 actions 插件
  const queryField = useProTableQueryFieldPlugin() // 引用 queryField 插件

  console.log('polling', polling ? pollingTimeout : undefined)

  useInterval(
    () => {
      queryField.refresh()
    },
    polling ? pollingTimeout : undefined,
  )

  // 注册自定义动作
  useEffect(() => {
    setTableActions({
      'toggle-polling': () => ({
        actionType: 'switch',
        checked: polling,
        checkedChildren: '轮询',
        unCheckedChildren: '静止',
        onClick: toggle,
      }),
    })
  }, [polling])
}, 'polling')

// 此处使用自定义创建的 ProTable
const ProTable = createProTable(proTableBuiltInPlugins.add(pollingPlugin))

export default function Demo() {
  return (
    <ProTable
      title="自定义轮询插件 + 自定义内置动作示例"
      defaultPolling={true}
      polling={3000}
      actions={['toggle-polling']} // 应用插件声明的自定义动作
      onQuery={async params => {
        console.log('onQuery', params)
        await delay(1500)

        return {
          success: true,
          data: [],
        }
      }}
    />
  )
}

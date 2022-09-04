/* eslint-disable @typescript-eslint/ban-types */
import React, { memo, forwardRef, useImperativeHandle, useContext } from 'react'
import { Space } from 'antd'
import { classnames, run } from '@cjy0208/tools'
import { Merge } from '@cjy0208/pro-utils'
import { useContextSize, ConfigProvider, ProConfigContext } from '@cjy0208/pro-provider'
import SizeContext from 'antd/es/config-provider/SizeContext'

import { TableWrapper, ChainableTablePlugins } from './utils'
import useQueryFieldPlugin from './plugins/queryField'
import useActionsPlugin from './plugins/actions'
import useTablePlugin from './plugins/table'
import useEditFieldPlugin from './plugins/editField'
import useValueTypePlugin from './plugins/valueType'
import useModalPlugin from './plugins/modal'
import useConfigPlugin from './plugins/config'
import { ProTableProps, ProTableBuiltInPlugins } from './types'

const inBuiltPlugins = [
  useConfigPlugin,
  useValueTypePlugin,
  useQueryFieldPlugin,
  useActionsPlugin,
  useTablePlugin,
  useModalPlugin,
  useEditFieldPlugin,
]

// export type ProTableProps = MergeMultiple<
//   [
//     MergeMultiple<[typeof useConfigPlugin.props, typeof useValueTypePlugin.props, typeof useQueryFieldPlugin.props]>,

//     MergeMultiple<[typeof useActionsPlugin.props, typeof useTablePlugin.props, typeof useModalPlugin.props]>,

//     typeof useEditFieldPlugin.props,
//   ]
// >

export const pluginChain = new ChainableTablePlugins()
export const builtInPlugins = pluginChain
// .add(useConfigPlugin)
// .add(useValueTypePlugin)
// .add(useQueryFieldPlugin)
// .add(useActionsPlugin)
// .add(useTablePlugin)
// .add(useModalPlugin)
// .add(useEditFieldPlugin)

// const builtInPluginPropsType = builtInPlugins.getPropsType()

const TableContent = memo(
  forwardRef(function TableContent(props: any, ref) {
    const queryField = useQueryFieldPlugin()
    const table = useTablePlugin()
    const ctxSize = useContextSize()
    const {
      mini = ctxSize === 'small' ?? false,
      pure = false,
      tableExtraRender,
      hideQueryFields,
      plugins = [],
      bodyStyle = pure ? { padding: 0 } : {},
      render = ({ queryField, tableExtra, table }: any = {}) => (
        <Space
          className={classnames('f-pro-table-body', {
            'f-pro-table-mini': mini,
          })}
          direction="vertical"
          size={mini ? 'small' : 'middle'}
          style={bodyStyle}
        >
          {queryField}
          {tableExtra}
          {table}
        </Space>
      ),
    } = props

    const allPluginRef = Object.assign(
      {},
      ...plugins.map((plugin: any) => ({
        [plugin.name]: plugin(),
      })),
    )

    useImperativeHandle(ref, () => allPluginRef)

    return (
      <SizeContext.Provider value={mini ? 'small' : 'middle'}>
        {render({
          queryField: !hideQueryFields && queryField?.hasQueryFields ? queryField?.render() : null,
          tableExtra: tableExtraRender ? <div className="f-pro-table-extra">{run(tableExtraRender)}</div> : null,
          table: table.render(),
        })}
      </SizeContext.Provider>
    )
  }),
)

export function createProTable<T = ProTableProps>(plugins: ChainableTablePlugins<T | ProTableProps> = builtInPlugins) {
  const ProTable: React.FC<Merge<T, ProTableProps>> = memo(
    forwardRef(function ProTable(props: T, ref) {
      const allPlugins = [...inBuiltPlugins, ...plugins.get()]
      const parentContext = useContext(ProConfigContext)

      return (
        <ConfigProvider localeKey={(props as any)?.localeKey ?? 'zh_CN'} {...(parentContext ?? {})}>
          <TableWrapper plugins={allPlugins} {...props}>
            <TableContent {...props} ref={ref} plugins={allPlugins} />
          </TableWrapper>
        </ConfigProvider>
      )
    }),
  ) as any

  return ProTable
}

export function useProTableRef<T = {}>() {
  const ref = React.useRef<Merge<ProTableBuiltInPlugins, T>>(null)

  return ref!
}

export const ProTable: React.FC<ProTableProps> = createProTable(builtInPlugins)
export default ProTable

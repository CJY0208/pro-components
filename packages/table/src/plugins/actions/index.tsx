import React, { useMemo, useState } from 'react'
import { message } from 'antd'
import { run } from '@cjy0208/tools'
import { SettingOutlined, DeleteOutlined } from '@ant-design/icons'
import { useSetState as useAhooksSetState, useMemoizedFn, useLatest } from 'ahooks'

import { useProps, createPlugin } from '../../utils'
import useQueryFieldPlugin from '../queryField'
// import useModalPlugin from '../modal'
import { ProTableProps, ProTableBuiltInActionType } from '../../types'
import useConfigPlugin, { I18nText } from '../config'
import Actions from './Actions'
import Action from '../actions/Action'
import RefreshButton from './RefreshButton'

const useSetState = useAhooksSetState as typeof useState

// 表格动作
function useTableActions() {
  const props = useProps<ProTableProps>()
  const { actions: tableActionConfigs = [], builtInActions } = props

  const [tableActions, setTableActions] = useSetState<Record<string, ProTableBuiltInActionType>>({
    // export: <Button>导出</Button>,
    // print: <Button>打印</Button>,
    ...(builtInActions?.actions ?? {}),
  })
  const latestTableActions = useLatest(tableActions)

  const renderTableActions = useMemoizedFn(() => (
    <Actions configs={tableActionConfigs} getBuiltInActions={() => latestTableActions.current} />
  ))

  return {
    tableActions,
    tableActionConfigs,
    setTableActions,
    renderTableActions,
  }
}

// 图标动作
function useIconActions() {
  const props = useProps<ProTableProps>()
  const { iconActions: iconActionConfigs = [], builtInActions } = props
  const [iconActions, setIconActions] = useSetState<Record<string, ProTableBuiltInActionType>>({
    refresh: <RefreshButton />,
    settings: {
      icon: <SettingOutlined />,
      onClick: () => message.info('还没做'),
    },
    ...(builtInActions?.iconActions ?? {}),
  } as Record<string, ProTableBuiltInActionType>)
  const latestIconActions = useLatest(iconActions)

  const renderIconActions = useMemoizedFn(() => (
    <Actions
      spaceSize={2}
      configs={iconActionConfigs}
      getBuiltInActions={() => latestIconActions.current}
      renderActionConfig={({ ...actionProps }: any = {}) => (
        <Action
          extraConfirmProps={{
            placement: 'topRight',
          }}
          {...actionProps}
          type="text"
          content={null}
        />
      )}
    />
  ))

  return {
    iconActions,
    iconActionConfigs,
    setIconActions,
    renderIconActions,
  }
}

// 多选动作
function useBatchActions() {
  const props = useProps<ProTableProps>()
  const {
    multipleActions = [],
    batchActions: batchActionConfigs = multipleActions ?? {},
    onDelete,
    builtInActions,
  } = props
  const queryField = useQueryFieldPlugin(({ selectedItems }) => [selectedItems])
  const { t } = useConfigPlugin(() => [])
  // const { confirmPromise } = useModalPlugin(() => [])
  const { setSelectedItems, getSelectedItems } = queryField

  const [batchActions, setBatchActions] = useSetState<Record<string, ProTableBuiltInActionType>>({
    delete: selectedItems => ({
      icon: <DeleteOutlined />,
      danger: true,
      content: <I18nText text="actions.multipleDelete" />,
      confirm: t('actions.multipleDeleteConfirm', selectedItems.length),
      async onClick() {
        const { success } = (await run(onDelete, undefined, selectedItems)) ?? {}

        if (success) {
          setSelectedItems([])
          queryField.search()
        }
      },
    }),
    ...(builtInActions?.batchActions ?? {}),
  } as Record<string, ProTableBuiltInActionType>)
  const latestBatchActions = useLatest(batchActions)

  const renderBatchActions = useMemoizedFn(() => (
    <Actions
      spaceSize={2}
      configs={batchActionConfigs}
      getBuiltInActions={() => latestBatchActions.current}
      actionParams={[getSelectedItems()]}
      renderActionConfig={({ content, onClick, ...actionProps }: any = {}) => (
        <Action
          type="link"
          size="small"
          extraConfirmProps={{
            placement: 'topRight',
          }}
          {...actionProps}
          onClick={async () => {
            const selectedItems = getSelectedItems()
            const { success } = (await run(onClick, undefined, selectedItems)) ?? {}

            if (success) {
              setSelectedItems([])
            }
          }}
        >
          {content}
        </Action>
      )}
    />
  ))

  return {
    batchActions,
    batchActionConfigs,
    setBatchActions,
    renderBatchActions,
  }
}

// 表格项动作
function useColumnActions() {
  const props = useProps<ProTableProps>()
  const { columnActions: columnActionConfigs = [], onDelete, builtInActions } = props
  const queryField = useQueryFieldPlugin(() => [])

  const [columnActions, setColumnActions] = useSetState<Record<string, ProTableBuiltInActionType>>({
    delete: (item: any) => ({
      icon: <DeleteOutlined />,
      danger: true,
      confirm: <I18nText text="actions.deleteConfirm" />,
      content: <I18nText text="actions.delete" />,
      async onClick() {
        const { success } = (await run(onDelete, undefined, item)) ?? {}

        if (success) {
          queryField.search()
        }
      },
    }),
    'delete-icon': {
      builtIn: 'delete',
      tooltip: <I18nText text="actions.delete" />,
      content: null,
    },
    ...(builtInActions?.columnActions ?? {}),
  } as Record<string, ProTableBuiltInActionType>)
  const latestColumnActions = useLatest(columnActions)

  const renderColumnsActions = useMemoizedFn(
    (record, idx: number, dataSource: any[], actionConfigs = columnActionConfigs) => (
      <Actions
        configs={actionConfigs}
        getBuiltInActions={() => latestColumnActions.current}
        actionParams={[record, idx, dataSource]}
        renderActionConfig={({ onClick, actionType = 'button', ...actionProps }: any = {}) => (
          <Action
            size={actionType === 'button' ? 'small' : undefined}
            type="link"
            extraConfirmProps={{
              placement: 'topRight',
            }}
            {...actionProps}
            actionType={actionType}
            onClick={async (...args: any[]) => {
              await run(onClick, undefined, record, idx, dataSource, ...args)
            }}
          />
        )}
      />
    ),
  )

  return {
    columnActions,
    columnActionConfigs,
    setColumnActions,
    renderColumnsActions,
  }
}

export const useActionsPlugin = createPlugin(() => {
  const { tableActions, tableActionConfigs, setTableActions, renderTableActions } = useTableActions()
  const { iconActions, iconActionConfigs, setIconActions, renderIconActions } = useIconActions()
  const { batchActions, batchActionConfigs, setBatchActions, renderBatchActions } = useBatchActions()
  const { columnActions, columnActionConfigs, setColumnActions, renderColumnsActions } = useColumnActions()

  return {
    builtInActions: useMemo(
      () => ({
        tableActions,
        iconActions,
        batchActions,
        columnActions,
        tableActionConfigs,
        iconActionConfigs,
        batchActionConfigs,
        columnActionConfigs,
      }),
      [
        tableActions,
        iconActions,
        batchActions,
        columnActions,
        tableActionConfigs,
        iconActionConfigs,
        batchActionConfigs,
        columnActionConfigs,
      ],
    ),
    setTableActions,
    setIconActions,
    setBatchActions,
    setColumnActions,
    renderTableActions,
    renderIconActions,
    renderBatchActions,
    renderColumnsActions,
  }
}, 'actions')
export default useActionsPlugin

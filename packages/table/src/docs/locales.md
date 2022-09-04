---
nav:
  path: /pro-table

group:
  title: 国际化

title: 国际化
---

# 国际化

## 快捷国际化

通过 `localeKey` 配置可实现快捷国际化，覆盖了 ProTable 内部的所有文案（不包括 moment 相关的文案）

目前仅支持 `中文`、`英文`、`印尼文`，取值为 `zh-CN`、`zh_CN`、`en-US`、`en_US`、`id-ID`、`id_ID`

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => <ProTable localeKey="en-US" />
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { Random } from 'mockjs'
import { delay, sample, run, random } from '@cjy0208/tools'

const mockOptions = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
  { label: 'Option 5', value: 5 },
]

const dataSource = [
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
    multipleSelect: [...new Set([sample<any>(mockOptions)?.value, sample<any>(mockOptions)?.value])],
  },
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
    multipleSelect: [...new Set([sample<any>(mockOptions)?.value, sample<any>(mockOptions)?.value])],
  },
]

export default () => (
  <ProTable
    localeKey="en-US"
    actions={[
      'add', // 新增
    ]}
    iconActions={[
      'refresh', // 刷新
      'table-size', // 表格密度
      'fullscreen', // 全屏
    ]}
    columnActions={[
      'view', // 查看详情
      'edit', // 编辑（弹窗）
      {
        builtIn: 'table-edit',
        content: 'Table Edit',
      }, // 编辑（表格内）
      'delete', // 删除
    ]}
    selectable // 批量动作需要配合 selectable 使用，仅在有选中了内容的情况下出现
    batchActions={[
      'delete', // 批量删除
    ]}
    rowSelection={{
      defaultSelectedRowKeys: dataSource?.map(item => item.id),
    }}
    columns={[
      {
        title: 'Text',
        dataIndex: 'text',
        width: '35%',
        editField: true,
        queryField: true,
      },
      {
        title: 'Select',
        dataIndex: 'select',
        width: '20%',
        valueType: 'select',
        valueEnum: mockOptions,
        editField: true,
        queryField: true,
      },
      {
        title: 'Multiple Select',
        dataIndex: 'multipleSelect',
        width: '45%',
        valueType: 'multipleSelect',
        valueEnum: mockOptions,
        editField: true,
        queryField: true,
      },
    ]}
    onQuery={async () => {
      await delay(500)

      return {
        data: dataSource,
      }
    }}
    onAdd={async () => {
      await delay(500)
    }}
    onView={async () => {
      await delay(500)
    }}
    onEdit={async () => {
      await delay(500)
    }}
    onDelete={async () => {
      await delay(500)
    }}
    pagination={false}
  />
)
```

## 指定修改对应值

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'

export default () => (
  <ProTable
    locale={{
      actions: {
        multipleDeleteConfirm: (count: any = 0) => `确定删除已选中的 ${count} 条数据吗？`,
        multipleDelete: '批量删除',
        deleteConfirm: '确定删除吗？',
        delete: '删除',
        refreshTip: '刷新表格',
      },
      editField: {
        add: '新增',
        details: '详情',
        edit: '编辑',
        saveTips: '未保存的数据将会丢失，确定吗？',
      },
      queryField: {
        query: '查询',
        reset: '重置',
        fold: '收起',
        more: '更多',
      },
      modal: {
        okText: '确认',
        cancelText: '取消',
      },
      table: {
        selectionTips: (count: any = 0) => `已选择 ${count} 项`,
        deselect: '取消选择',
        inverse: '反向选择',
        action: '操作',
        totalDataCount: (total: any = 0) => `总共 ${total} 条数据`,
        edit: '编辑',
        save: '保存',
        cancel: '取消',
        cancelConfirm: '确认取消吗？',
        density: '表格密度',
        densityLarger: '宽松',
        densityMiddle: '中等',
        densitySmall: '紧凑',
      },
      valueType: {
        inputPassword: '输入密码',
        inputContent: '输入内容',
        chooseContent: '选择内容',
        startTime: '开始时间',
        endTime: '结束时间',
      },
    }}
  />
)
```

## ConfigProvider

可通过上下文配置的 `localeKey` 或者 `locale` 来修改文案

```jsx | pure
import { ConfigProvider, ProTable } from '@cjy0208/pro-components'
export default () => (
  <ConfigProvider localeKey="en-US">
    <ProTable />
  </ConfigProvider>
)
```

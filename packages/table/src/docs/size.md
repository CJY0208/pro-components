---
nav:
  path: /pro-table

group:
  title: 表格尺寸

title: 表格尺寸
---

# 表格尺寸

## 迷你表格

通过设置 `mini` 为 true 可开启迷你表格模式，方便小屏下浏览

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => <ProTable mini />
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { Random } from 'mockjs'
import { delay, sample, run, random } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项 1', value: 1 },
  { label: '选项 2', value: 2 },
  { label: '选项 3', value: 3 },
  { label: '选项 4', value: 4 },
  { label: '选项 5', value: 5 },
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
    mini
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
        content: '行内编辑',
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
        title: '文本',
        dataIndex: 'text',
        width: '35%',
        editField: true,
        queryField: true,
      },
      {
        title: '单选',
        dataIndex: 'select',
        width: '20%',
        valueType: 'select',
        valueEnum: mockOptions,
        editField: true,
        queryField: true,
      },
      {
        title: '多选',
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
    // pagination={false}
  />
)
```

## 只改变表格密度

通过设置 `size` 或 `defaultSize` 可以调整表格密度

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => <ProTable defaultSize="small" size="small" />
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { Random } from 'mockjs'
import { delay, sample, run, random } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项 1', value: 1 },
  { label: '选项 2', value: 2 },
  { label: '选项 3', value: 3 },
  { label: '选项 4', value: 4 },
  { label: '选项 5', value: 5 },
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
    defaultSize="small"
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
        content: '行内编辑',
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
        title: '文本',
        dataIndex: 'text',
        width: '35%',
        editField: true,
        queryField: true,
      },
      {
        title: '单选',
        dataIndex: 'select',
        width: '20%',
        valueType: 'select',
        valueEnum: mockOptions,
        editField: true,
        queryField: true,
      },
      {
        title: '多选',
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
    // pagination={false}
  />
)
```

## ConfigProvider

可通过上下文配置的 `size` 来修改尺寸，当 `size="small"` 时将，表格将自动开启 `mini` 模式

```jsx | pure
import { ConfigProvider, ProTable } from '@cjy0208/pro-components'
export default () => (
  <ConfigProvider size="small">
    <ProTable />
  </ConfigProvider>
)
```

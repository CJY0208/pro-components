---
nav:
  path: /pro-table

group:
  title: 动作配置

title: 动作配置
order: 3
---

# 动作

该功能由 `actions` 插件管理

表格内的动作一共分为 4 类，分别是

1. 动作 actions
2. 图标动作 iconActions
3. 表格项动作 columnActions
4. 多选动作 batchActions

## 内置动作

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
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
      'table-edit', // 编辑（表格内）
      'delete', // 删除
    ]}
    selectable // 批量动作需要配合 selectable 使用，仅在有选中了内容的情况下出现
    batchActions={[
      'delete', // 批量删除
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { Random } from 'mockjs'
import { delay, sample, run, random } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 },
]

const dataSource = [
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
  },
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
  },
]

export default () => (
  <ProTable
    title="内置动作"
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
        content: '表格编辑',
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
        width: '50%',
        editField: true,
        queryField: true,
      },
      {
        title: '单选框',
        dataIndex: 'select',
        width: '50%',
        valueType: 'select',
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

## 修改内置动作

通过 `builtIn` 选择要修改的内置动作，可以修改内置动作的任意属性，包括 onClick 事件

如果不行，那就是 bug

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    actions={[
      {
        builtIn: 'add', // 表明要修改的是 'add' 内置动作
        icon: null, // 取消 icon
        content: '创建新数据', // 修改按钮内容
      },
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { Random } from 'mockjs'
import { delay, sample, run, random } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 },
]

export default () => (
  <ProTable
    actions={[
      {
        builtIn: 'add',
        icon: null, // 取消 icon
        content: '创建新数据', // 修改按钮内容
      },
    ]}
    columns={[
      {
        title: '文本',
        dataIndex: 'text',
        width: '50%',
        editField: true,
        // queryField: true,
      },
      {
        title: '单选框',
        dataIndex: 'select',
        width: '50%',
        valueType: 'select',
        valueEnum: mockOptions,
        editField: true,
        // queryField: true,
      },
    ]}
    onAdd={async () => {
      await delay(500)
    }}
    pagination={false}
  />
)
```

## 自定义动作

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
import { DownloadOutlined } from '@ant-design/icons'
export default () => (
  <ProTable
    actions={[
      {
        icon: <DownloadOutlined />, // 动作图标
        content: '无确认框',
        tooltip: '提示内容',
        async onClick() {
          // 异步自动 loading
          await delay(1000)
        },
      },
      {
        icon: <DownloadOutlined />, // 动作图标
        content: '有确认框',
        tooltip: '提示内容',
        confirm: '确认框内容',
        async onClick() {
          // 异步自动 loading，带确认框时 loading 位置不同
          await delay(1000)
        },
      },
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { DownloadOutlined } from '@ant-design/icons'
import { delay } from '@cjy0208/tools'

export default () => (
  <ProTable
    actions={[
      {
        icon: <DownloadOutlined />, // 动作图标
        content: '无确认框',
        tooltip: '提示内容',
        async onClick() {
          // 异步自动 loading
          await delay(1000)
        },
      },
      {
        icon: <DownloadOutlined />, // 动作图标
        content: '有确认框',
        tooltip: '提示内容',
        confirm: '确认框内容',
        async onClick() {
          // 异步自动 loading，带确认框时 loading 位置不同
          await delay(1000)
        },
      },
    ]}
  />
)
```

## 动作菜单（更多）

通过配置 `menu` 属性来实现动作菜单（更多）

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    actions={[
      {
        content: '更多',
        onClick() {},
        menu: [
          {
            label: '子按钮1',
            onClick() {
              message.info('点击了子按钮1')
            },
          },
          {
            label: '子按钮2',
            disabled: true,
          },
        ],
      },
      {
        // 只有 menu
        menu: [
          {
            label: '子按钮1',
            onClick() {
              message.info('点击了子按钮1')
            },
          },
          {
            label: '子按钮2',
            disabled: true,
          },
        ],
      },
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { delay } from '@cjy0208/tools'

export default () => (
  <ProTable
    actions={[
      {
        content: '更多',
        async onClick() {
          message.info('点击了更多')
          await delay(1000)
        },
        menu: [
          {
            label: '子按钮1',
            onClick() {
              message.info('点击了子按钮1')
            },
          },
          {
            label: '子按钮2',
            disabled: true,
          },
        ],
      },
      {
        // 只有 menu
        menu: [
          {
            label: '子按钮1',
            onClick() {
              message.info('点击了子按钮1')
            },
          },
          {
            label: '子按钮2',
            disabled: true,
          },
        ],
      },
    ]}
  />
)
```

## 表格项动作的 item

`columnActions` 允许传递函数，函数将获得当前 item

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    columnActions={[
      item => ({
        tooltip: '提示内容',
        confirm: `当前 itemId：${item.id}`,
        async onClick() {
          // 异步自动 loading
          await delay(1000)
        },
      }),
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { Random } from 'mockjs'
import { delay, sample, run, random } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 },
]

const dataSource = [
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
  },
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
  },
]

export default () => (
  <ProTable
    columnActions={[
      item => ({
        content: `当前项文本：${item.text}`,
        tooltip: `当前项选择：${item.select}`,
        confirm: `当前 itemId：${item.id}`,
        async onClick() {
          // 异步自动 loading
          await delay(1000)
        },
      }),
    ]}
    columns={[
      {
        title: '文本',
        dataIndex: 'text',
        width: '50%',
      },
      {
        title: '单选框',
        dataIndex: 'select',
        width: '50%',
        valueType: 'select',
        valueEnum: mockOptions,
      },
    ]}
    dataSource={dataSource}
    pagination={false}
  />
)
```

## 多选动作的 items

`batchActions` 允许传递函数，函数将获得选中的 items

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    batchActions={[
      items => ({
        content: `当前选中了 ${items.length} 个`,
        async onClick() {
          // 异步自动 loading
          await delay(1000)
        },
      }),
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { Random } from 'mockjs'
import { delay, sample, run, random } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 },
]

const dataSource = [
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
  },
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
  },
]

export default () => (
  <ProTable
    batchActions={[
      items => ({
        content: `当前选中了 ${items.length} 个`,
        async onClick() {
          // 异步自动 loading
          await delay(1000)
        },
      }),
    ]}
    selectable
    rowSelection={{
      defaultSelectedRowKeys: dataSource?.map(item => item.id),
    }}
    columns={[
      {
        title: '文本',
        dataIndex: 'text',
        width: '50%',
      },
      {
        title: '单选框',
        dataIndex: 'select',
        width: '50%',
        valueType: 'select',
        valueEnum: mockOptions,
      },
    ]}
    dataSource={dataSource}
    pagination={false}
  />
)
```

## Switch 动作

通过 `actionType: 'switch'` 切换为开关动作，此时各项配置将作为 antd.Switch 属性

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    columnActions={[
      {
        actionType: 'switch',
        checkedChildren: '开启',
        unCheckedChildren: '关闭',
        tooltip: '提示内容',
        confirm: '确认内容',
        async onClick() {
          // 异步自动 loading
          await delay(1000)
        },
      },
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { Random } from 'mockjs'
import { delay, sample, run, random } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 },
]

const dataSource = [
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
  },
  {
    id: Random.id(),
    text: Random.name(),
    select: sample<any>(mockOptions)?.value,
  },
]

export default () => (
  <ProTable
    columnActions={[
      {
        actionType: 'switch',
        checkedChildren: '开启',
        unCheckedChildren: '关闭',
        tooltip: '提示内容',
        confirm: '确认内容',
        async onClick() {
          // 异步自动 loading
          await delay(1000)
        },
      },
    ]}
    columns={[
      {
        title: '文本',
        dataIndex: 'text',
        width: '50%',
      },
      {
        title: '单选框',
        dataIndex: 'select',
        width: '50%',
        valueType: 'select',
        valueEnum: mockOptions,
      },
    ]}
    dataSource={dataSource}
  />
)
```

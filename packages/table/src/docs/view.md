---
nav:
  path: /pro-table

group:
  title: 查看详情

title: 查看详情
order: 5
---

# 内置详情查看

该功能由 `editField` 插件管理，可参考[访问内部插件](/pro-table/docs/plugins#访问内部插件)取得插件实例

以及可参考 editField 插件[提供的功能](/pro-table/docs/plugins#editfield)

内部集成了 [antd.Descriptions](https://ant.design/components/descriptions-cn/) 组件对表格项进行详情展示

## 基础用法

1. 通过 `viewFields` 属性对查询项进行配置
2. 通过 `columnActions={['view']}` 启用详情动作

默认将会唤出详情弹窗，各表单项将按照 column 的 `dataIndex` 与 field 的 `name` 相匹配，自动填入当前 item 的值

可通过 `onView` 异步方法修改 item 值

<!-- prettier-ignore -->
```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    viewFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框', name: 'select', type: 'select', // 内置了多种表单类型
        options: [ // 支持异步获取 async () => [...]
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
      },
    ]}
    columnActions={['view']} // 开启编辑动作（弹窗）
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
    onView={async (item) => {
      const details = await axios.get('SERVER_DETAILS', { id: item.id })

      return {
        data: { ...item, ...details },
        success: true
      }
    }}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import '@cjy0208/pro-components/es/style.less'

import { Random } from 'mockjs'
import { message } from 'antd'
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
    dataSource={[
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
    ]}
    viewFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select', // 内置了多种表单类型
        options: mockOptions,
      },
    ]}
    columnActions={['view']} // 开启 item 动作
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
    onView={async item => {
      await delay(1000) // 模拟查询接口延时

      return {
        data: { ...item },
        success: true,
      }
    }}
    onEdit={async (params, item) => {
      message.info(`参数：${JSON.stringify(params)}`)
      await delay(1000) // 模拟查询接口延时

      return { success: true, message: '编辑成功' }
    }}
    pagination={false}
  />
)
```

## 从 columns 继承

1. 直接在 `columns` 里写表单配置，适合对表格详情快速浏览
2. 通过 `columnActions={['view']}` 启用详情动作

默认所有 columns 都配置为 `viewField: true`，如需禁用此行为，需要显式声明 `viewField: false`

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    columnActions={['view']}
    columns={[
      { title: '文本', dataIndex: 'text', viewField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
        viewField: false, // 详情弹窗内不展示
      },
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import '@cjy0208/pro-components/es/style.less'

import { Random } from 'mockjs'
import { message } from 'antd'
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
    dataSource={[
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
    ]}
    columnActions={['view']}
    columns={[
      { title: '文本', dataIndex: 'text', viewField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: mockOptions,
        viewField: false,
      },
    ]}
    pagination={false}
  />
)
```

## 自定义布局

使用 `renderModalViewFields` 属性进行更灵活的自定义

或者使用 `renderModalEditFields` 的 `mode` 为 view 时进行配置

函数获得的参数有以下几个

- renderField：渲染单个 field，可传入 field 的 name 属性，或者是 field 对象配置
- renderFields：渲染多个 fields，可传入一维数组、二维数组
- mode：模式，可获得 add、edit、view，分别代表（新增、编辑、查看）三种弹框状态
- item：当前操作项，仅 edit、view 两种模式时有值
- form：当前表单 form 实例

自定义布局功能基于 `ProForm`，可参考 [ProForm 布局](/pro-form/docs/layouts)

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    viewFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
    ]}
    renderModalViewFields={({ renderField, renderFields }) => {
      const [count, setCount] = useState(0)

      return (
        <>
          <div>count: {count}</div>
          {renderField('select')}
          {renderFields([
            ['text', <button onClick={() => setCount(count + 1)}>+</button>, 'select'],
            ['text'],
            ['text', 'select', 'text'],
            [
              { name: 'select', colSpan: 16 },
              { name: 'text', colSpan: 8 },
            ],
            [
              { colSpan: 16, content: <div>自定义节点1</div> },
              { colSpan: 8, content: <div>自定义节点2</div> },
            ],
          ])}
        </>
      )
    }}
  />
)
```

```tsx
import React, { useState } from 'react'
import { ProTable } from '@cjy0208/pro-components'
import '@cjy0208/pro-components/es/style.less'

import { Random } from 'mockjs'
import { message } from 'antd'
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
    dataSource={[
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
    ]}
    columnActions={['view']} // 开启 item 动作
    columns={[
      {
        title: '文本',
        dataIndex: 'text',
        width: '50%',
        editField: true,
      },
      {
        title: '单选框',
        dataIndex: 'select',
        width: '50%',
        valueType: 'select',
        valueEnum: mockOptions,
        editField: true,
      },
    ]}
    renderModalViewFields={({ renderField, renderFields }) => {
      const [count, setCount] = useState(0)

      return (
        <>
          <div>count: {count}</div>
          {renderField('select')}
          {renderFields([
            ['text', <button onClick={() => setCount(count + 1)}>+</button>, 'select'],
            ['text'],
            ['text', 'select', 'text'],
            [
              { name: 'select', colSpan: 16 },
              { name: 'text', colSpan: 8 },
            ],
            [
              { colSpan: 16, content: <div>自定义节点1</div> },
              { colSpan: 8, content: <div>自定义节点2</div> },
            ],
          ])}
        </>
      )
    }}
    render={({ table }) => table}
    pagination={false}
  />
)
```

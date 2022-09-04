---
nav:
  path: /pro-table

group:
  title: 添加

title: 添加
order: 5
---

# 内置添加

该功能由 `editField` 插件管理，可参考[访问内部插件](/pro-table/docs/plugins#访问内部插件)取得插件实例

以及可参考 editField 插件[提供的功能](/pro-table/docs/plugins#editfield)

```jsx | pure
// 编辑、新增、详情弹窗的 modal 控制器，有 { close, promise, update } 几个方法
proTableRef?.current?.editField?.modalController
```

## 基础用法

1. 通过 `addFields` 或者 `editFields` 属性对查询项进行配置，`addFields` 优先级最高
2. 通过 `actions={['add']}` 启用新增动作

默认将会唤出新增弹窗，新增表单将不会填入 item 初始值，初始值只会以 field 配置的 initialValue 为准

表单确认后将调用 `onAdd` 方法，方法获得表单参数（如果表单没有改动不会调用 `onAdd`）

`onAdd` 完成后将自动刷新表格

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    addFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select', // 内置了多种表单类型
        options: mockOptions,
      },
    ]}
    actions={['add']} // 开启动作
    onAdd={async params => {
      message.info(`参数：${JSON.stringify(params)}`)
      await delay(1000) // 模拟查询接口延时

      return { success: true, message: '添加成功' }
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
    addFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select', // 内置了多种表单类型
        options: mockOptions,
      },
    ]}
    actions={['add']} // 开启动作
    onAdd={async params => {
      message.info(`参数：${JSON.stringify(params)}`)
      await delay(1000) // 模拟查询接口延时

      return { success: true, message: '添加成功' }
    }}
    pagination={false}
  />
)
```

## 从 columns 继承

直接在 `columns` 里写表单配置，适合新增项比较简单的、与 columns 关联较紧密的情况

1. 通过 `addField` 或 `editField` 来配置新增表单，`addField` 优先级最高
2. 通过 `actions={['add']}` 启用新增动作

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    actions={['add']}
    columns={[
      { title: '文本', dataIndex: 'text', editField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: mockOptions,
        addField: {
          // label: '单选框', // 继承自 column.title，可覆盖
          // name: 'select', // 继承自 column.dataIndex，可覆盖
          // type: 'select', // 继承自 column.valueType，可覆盖
          // options: [...], // 继承自 column.valueEnum，可覆盖
        },
      },
      {
        title: 'xxx',
        dataIndex: 'xxx',
        addField: true,
        hidden: true, // columns 中不显示，仅作 field 配置继承用，但也不会出现在 table-edit 中
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
    actions={['add']}
    columns={[
      { title: '文本', dataIndex: 'text', editField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: mockOptions,
        addField: {
          // label: '单选框', // 继承自 column.title，可覆盖
          // name: 'select', // 继承自 column.dataIndex，可覆盖
          // type: 'select', // 继承自 column.valueType，可覆盖
          // options: [...], // 继承自 column.valueEnum，可覆盖
        },
      },
      {
        title: 'xxx',
        dataIndex: 'xxx',
        addField: true,
        hidden: true, // columns 中不显示，仅作 field 配置继承用，但也不会出现在 table-edit 中
      },
    ]}
  />
)
```

## 表单校验

- 通过 `required` 属性简单配置必填规则，可传入 string 类型作为提示语
- 通过 `rules` 属性配置详细的校验规则，具体使用同 `<Form.Item rules={[...]}>`，配置此选项时 `required` 将失效

表单功能基于 `ProForm`，可参考 [ProForm 校验](/pro-form/docs/validate)

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    addFields={[
      { label: '文本', name: 'text', required: '请填写此项' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
        rules: [{ required: true, message: '请选择此项' }],
      },
    ]}
    // 或者
    columns={[
      { title: '文本', dataIndex: 'text', addField: { required: '请填写此项' } },
      {
        title: '单选框',
        dataIndex: 'select',
        valueTyle: 'select',
        valueEnum: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
        addField: {
          rules: [{ required: true, message: '请选择此项' }],
        },
      },
    ]}
  />
)
```

## 表单关联

通过 `hook` 配置项实现动态关联，可以写 react 的 hooks 来存储一些中间状态

表单功能基于 `ProForm`，可参考 [ProForm 关联](/pro-form/docs/relates)

<!-- prettier-ignore -->
```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    addFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        hook: ({ form }) => { 
          const textValue = form.getFieldValue('text') // 获取 text 字段

          useEffect(() => { // 可以写 react 的 hooks，来存储一些中间状态
            console.log('text 发生了变化', textValue)
          }, [textValue])

          return { // hook 函数可以动态修改除了 name 之外的所有属性
            options: textValue ? [{ label: textValue, value: textValue }] : [],
          }
        },
        dependencies: ['text'], // 显式声明依赖 text，可以不指定，不指定时候，任何值变化都会重新计算
      },
    ]}
  />
)
```

## 自定义布局

### 内联 label

**不建议**，最好保持上下结构，以保证 label 区域有充足的呈现空间

通过 `addFieldLayout` 配置内联 label

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    addFieldLayout="horizontal"
    addFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
      { label: '文本4', name: 'text4' },
      { label: '文本5', name: 'text5' },
    ]}
  />
)
```

### 完全自定义

使用 `renderModalAddFields` 属性进行更灵活的自定义

或者使用 `renderModalEditFields` 的 `mode` 为 add 时进行配置

函数获得的参数有以下几个

- renderField：渲染单个 field，可传入 field 的 name 属性，或者是 field 对象配置
- renderFields：渲染多个 fields，可传入一维数组、二维数组
- mode：模式，可获得 add、edit、view，分别代表（新增、编辑、查看）三种弹框状态
- form：当前表单 form 实例

自定义布局功能基于 `ProForm`，可参考 [ProForm 布局](/pro-form/docs/layouts)

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    addFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
    ]}
    renderModalAddFields={({ renderField, renderFields }) => {
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
    actions={['add']}
    columns={[
      {
        title: '文本',
        dataIndex: 'text',
        width: '50%',
        addField: true,
      },
      {
        title: '单选框',
        dataIndex: 'select',
        width: '50%',
        valueType: 'select',
        valueEnum: mockOptions,
        addField: true,
      },
    ]}
    renderModalAddFields={({ renderField, renderFields }) => {
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

## 内置的表单类型

表单功能基于 `ProForm`，可参考 [ProForm 类型 - 内置类型](/pro-form/docs/types#内置类型)

## 自定义表单类型

表单功能基于 `ProForm`，可参考 [ProForm 类型 - 自定义类型](/pro-form/docs/types#自定义类型)

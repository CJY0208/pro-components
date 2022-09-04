---
nav:
  path: /pro-table

group:
  title: 编辑

title: 编辑
order: 5
---

# 内置编辑

该功能由 `editField` 插件管理，可参考[访问内部插件](/pro-table/docs/plugins#访问内部插件)取得插件实例

以及可参考 editField 插件[提供的功能](/pro-table/docs/plugins#editfield)

## 基础用法

1. 通过 `editFields` 属性对查询项进行配置
2. 通过 `columnActions={['edit']}` 启用编辑动作

默认将会唤出编辑弹窗，各表单项将按照 column 的 `dataIndex` 与 field 的 `name` 相匹配，自动填入当前 item 的值

可通过 `onView` 异步方法修改 item 值

表单确认后将调用 `onEdit` 方法，方法获得表单参数和当前编辑项 item（如果表单没有改动不会调用 `onEdit`）

`onEdit` 完成后将自动刷新表格

<!-- prettier-ignore -->
```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    editFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框', name: 'select', type: 'select',
        options: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
      },
    ]}
    columnActions={['edit']} // 开启编辑动作（弹窗）
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
        valueEnum: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
      },
    ]}
    onView={async (item) => {
      const details = await axios.get('SERVER_DETAILS', { id: item.id })

      return {
        data: { ...item, ...details },
        success: true
      }
    }}
    onEdit={async (params, item) => {
      await axios.post('SERVER_URL', {
        id: item?.id,
        ...params
      })

      return { success: true, message: '编辑成功' }
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
    editFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: mockOptions,
      },
    ]}
    columnActions={['edit']} // 开启 item 动作
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

直接在 `columns` 里写表单配置，适合表格查询项比较简单的情况

1. 通过 `editFields` 属性对查询项进行配置
2. 通过 `columnActions={['edit']}` 启用编辑动作

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    columnActions={['edit']} // 开启编辑动作（弹窗）
    columns={[
      { title: '文本', dataIndex: 'text', editField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
        editField: {
          // label: '单选框', // 继承自 column.title，可覆盖
          // name: 'select', // 继承自 column.dataIndex，可覆盖
          // type: 'select', // 继承自 column.valueType，可覆盖
          // options: [...], // 继承自 column.valueEnum，可覆盖
        },
      },
      {
        title: 'xxx',
        dataIndex: 'xxx',
        editField: true,
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
    columnActions={[
      'edit', // 开启编辑动作（弹窗）
    ]}
    columns={[
      { title: '文本', dataIndex: 'text', editField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: mockOptions,
        editField: {
          // label: '单选框', // 继承自 column.title，可覆盖
          // name: 'select', // 继承自 column.dataIndex，可覆盖
          // type: 'select', // 继承自 column.valueType，可覆盖
          // options: [...], // 继承自 column.valueEnum，可覆盖
        },
      },
      {
        title: 'xxx',
        dataIndex: 'xxx',
        editField: true,
        hidden: true, // columns 中不显示，仅作 field 配置继承用，但也不会出现在 table-edit 中
      },
    ]}
    pagination={false}
  />
)
```

## 表格内编辑

通过 `columnActions={['table-edit']}` 启用表格内编辑动作，仅在表单配置从 columns 中继承时有效

点击 `保存` 时，也会调用 `onEdit` 函数

**注意：如果 columns 配置中存在 editField 时，内部 Table 组件将被包裹一层 Form 组件以准备支持 table-edit**

**这将会对自定义可编辑表格造成影响**

**可以通过 `tableEdit={false}` 显式阻止内部包裹 Form 组件**

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    columnActions={['table-edit']} // 开启编辑动作（表格内）
    columns={[
      { title: '文本', dataIndex: 'text', editField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
        editField: {
          // label: '单选框', // 继承自 column.title，可覆盖
          // name: 'select', // 继承自 column.dataIndex，可覆盖
          // type: 'select', // 继承自 column.valueType，可覆盖
          // options: [...], // 继承自 column.valueEnum，可覆盖
        },
      },
      {
        title: 'xxx',
        dataIndex: 'xxx',
        editField: true,
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
    columnActions={[
      'table-edit', // 开启编辑动作（表格内）
    ]}
    columns={[
      { title: '文本', dataIndex: 'text', editField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: mockOptions,
        editField: {
          // label: '单选框', // 继承自 column.title，可覆盖
          // name: 'select', // 继承自 column.dataIndex，可覆盖
          // type: 'select', // 继承自 column.valueType，可覆盖
          // options: [...], // 继承自 column.valueEnum，可覆盖
        },
      },
      {
        title: 'xxx',
        dataIndex: 'xxx',
        editField: true,
        hidden: true, // columns 中不显示，仅作 field 配置继承用，但也不会出现在 table-edit 中
      },
    ]}
    pagination={false}
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
    editFields={[
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
      { title: '文本', dataIndex: 'text', editField: { required: '请填写此项' } },
      {
        title: '单选框',
        dataIndex: 'select',
        valueTyle: 'select',
        valueEnum: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
        editField: {
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
    editFields={[
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

通过 `editFieldLayout` 配置内联 label

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    editFieldLayout="horizontal"
    editFields={[
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

使用 `renderModalEditFields` 属性进行更灵活的自定义

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
    editFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
    ]}
    renderModalEditFields={({ renderField, renderFields }) => {
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
    columnActions={['edit']} // 开启 item 动作
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
    renderModalEditFields={({ renderField, renderFields }) => {
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
  />
)
```

## 内置的表单类型

表单功能基于 `ProForm`，可参考 [ProForm 类型 - 内置类型](/pro-form/docs/types#内置类型)

## 自定义表单类型

表单功能基于 `ProForm`，可参考 [ProForm 类型 - 自定义类型](/pro-form/docs/types#自定义类型)

## 弹窗配置

### 尺寸

通过 `editFieldModalProps.width` 对弹窗进行尺寸配置，各项属性与 [antd.Modal](https://ant.design/components/modal-cn/#API) 相同

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    editFieldColumns={1}
    editFieldModalProps={{ width: 390 }}
    editFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: mockOptions,
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
    editFieldColumns={1}
    editFieldModalProps={{ width: 390 }}
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
    editFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: mockOptions,
      },
    ]}
    columnActions={['edit']} // 开启 item 动作
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

### 使用抽屉

通过配置 `editFieldModalProps.drawer === true` 将弹窗改为抽屉

在使用抽屉时，editFieldModalProps 属性将提供给内置的 [antd.Drawer](https://ant.design/components/drawer-cn/#API)

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    editFieldModalProps={{ drawer: true }}
    editFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: mockOptions,
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
    editFieldModalProps={{ drawer: true }}
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
    editFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: mockOptions,
      },
    ]}
    columnActions={['edit']} // 开启 item 动作
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

### 抽屉位置

在使用抽屉弹出时，通过配置 `editFieldModalProps.placement` 调整抽屉方向

取值与 [antd.Drawer.placement](https://ant.design/components/drawer-cn/#components-drawer-demo-placement) 相同，分别为 top、right、bottom、left，默认是 `right`

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    editFieldModalProps={{ drawer: true, placement: 'left' }}
    editFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: mockOptions,
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
    editFieldModalProps={{ drawer: true, placement: 'left' }}
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
    editFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: mockOptions,
      },
    ]}
    columnActions={['edit']} // 开启 item 动作
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

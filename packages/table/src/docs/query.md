---
nav:
  path: /pro-table

group:
  title: 查询

title: 查询
order: 4
---

# 内置查询

该功能由 `queryField` 插件管理，可参考[访问内部插件](/pro-table/docs/plugins#访问内部插件)取得插件实例

以及可参考 queryField 插件[提供的功能](/pro-table/docs/plugins#queryfield)

## 基础用法

通过 `queryFields` 属性对查询项进行配置，通过 `onQuery` 进行请求并返回结果

<!-- prettier-ignore -->
```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFields={[
      { label: '文本', name: 'text' },
      {
        label: '单选框', name: 'select', type: 'select', // 内置了多种表单类型
        options: [ // 支持异步获取 async () => [...]
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
      },
    ]}
    onQuery={async params => {
      const response = await axios.get('SERVER_URL', { params })

      return {
        data: response?.data, // 数组格式，会用作 Table 的 dataSource
        total: response?.total, // 返回 total 总数来支持分页
      }
    }}
  />
)
```

<code src="./demos/query/basic" />

## 从 columns 继承

直接在 `columns` 里写表单配置，适合表格查询项比较简单的情况

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    columns={[
      { title: '文本', dataIndex: 'text', queryField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
        queryField: {
          // label: '单选框', // 继承自 column.title，可覆盖
          // name: 'select', // 继承自 column.dataIndex，可覆盖
          // type: 'select', // 继承自 column.valueType，可覆盖
          // options: [...], // 继承自 column.valueEnum，可覆盖
        },
      },
      {
        title: 'xxx',
        dataIndex: 'xxx',
        queryField: true,
        hidden: true, // columns 中不显示，仅作 field 配置继承用
      },
    ]}
  />
)
```

<code src="./demos/query/extend-from-columns" />

## 表单校验

- 通过 `required` 属性简单配置必填规则，可传入 string 类型作为提示语
- 通过 `rules` 属性配置详细的校验规则，具体使用同 `<Form.Item rules={[...]}>`，配置此选项时 `required` 将失效

表单功能基于 `ProForm`，可参考 [ProForm 校验](/pro-form/docs/validate)

<!-- prettier-ignore -->
```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFields={[
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
  />
)
```

```jsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { message } from 'antd'
import { delay } from '@cjy0208/tools'

export default () => (
  <ProTable
    queryFields={[
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
    manualQuery
    onQuery={async params => {
      message.info(`参数：${JSON.stringify(params)}`)
      await delay(1000) // 模拟查询接口延时
    }}
    render={({ queryField }) => queryField} // 仅渲染查询区域
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
    queryFields={[
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
    // 或者
    columns={[
      { title: '文本', dataIndex: 'text', queryField: { required: '请填写此项' } },
      {
        title: '单选框',
        dataIndex: 'select',
        valueTyle: 'select',
        valueEnum: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
        queryField: {
          rules: [{ required: true, message: '请选择此项' }],
        },
      },
    ]}
  />
)
```

<code src="./demos/query/relate" />

## 更多 / 收起

以下两种条件会出现 “更多” 按钮

1. （推荐）一行显示多少个查询项 + 默认显示多少行，超过时出现 “更多” 按钮

   - 默认一行显示 3 项（查询按钮组算一个项），可通过 `queryFieldColumns` 修改这个数值
   - 默认只展示第 1 行的数据，可通过 `queryFieldDefaultLines` 修改这个数值

2. 指定默认显示多少项，超过时出现 “更多” 按钮

   - 默认超过 2 个查询项会出现 “更多 / 收起” 按钮，可通过 `queryFieldDefaultLength` 修改这个数值

两种情况可以混用，`queryFieldDefaultLength` 优先级高于 `queryFieldDefaultLines`

<!-- prettier-ignore -->
```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFieldColumns={4} // 一行显示 4 项（默认是 3 个）
    queryFieldDefaultLines={1} // 默认只展示第 1 行
    queryFieldDefaultLength={2} // 默认只展示 2 个查询项
    queryFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
      { label: '文本4', name: 'text4' },
      { label: '文本5', name: 'text5' },
      { label: '文本6', name: 'text6' },
    ]}
  />
)
```

<code src="./demos/query/fold" />

## 调整顺序

通过 `queryFieldOrder` 自定义查询项排列的顺序

不需要全部指定，未指定的会按照原来的顺序衔接在指定顺序之后

<!-- prettier-ignore -->
```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFieldOrder={['text5', 'text3']}
    queryFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
      { label: '文本4', name: 'text4' },
      { label: '文本5', name: 'text5' },
      { label: '文本6', name: 'text6' },
    ]}
  />
)
```

<code src="./demos/query/order" />

## 自定义布局

### 内联 label

**不建议**，最好保持上下结构，以保证 label 区域有充足的呈现空间

通过 `queryFieldLayout` 配置内联 label

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFieldLayout="horizontal"
    queryFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
      { label: '文本4', name: 'text4' },
      { label: '文本5', name: 'text5' },
    ]}
  />
)
```

```jsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFieldLayout="horizontal"
    queryFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
      { label: '文本4', name: 'text4' },
      { label: '文本5', name: 'text5' },
    ]}
    render={({ queryField }) => queryField}
  />
)
```

### 二维 queryFields

`queryFields` 允许传入二维数组来实现第一种自定义布局方式

数组的两个维度分别对应 “行” 与 “列”

每一行默认会按照列数进行等分，可以通过 `colSpan` 属性来进行调整，取值参考 [Col 的 span 属性](https://ant.design/components/grid-cn/#Col)

**此种布局方式下，查询按钮组会独占一行**

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFields={[
      [
        { label: '文本1', name: 'text1' }, // 一行两个，55 分
        { label: '文本2', name: 'text2' },
      ],
      [{ label: '文本3', name: 'text3' }], // 豪气独占一行
      [
        { label: '文本4', name: 'text4' }, // 一行 3 个，33分
        { label: '文本5', name: 'text5' },
        { label: '文本6', name: 'text6' },
      ],
      [
        { label: '文本7', name: 'text7', colSpan: 16 }, // 占 2/3 (16 / 24)
        { label: '文本8', name: 'text8', colSpan: 8 }, // 占 1/3 (8 / 24)
      ],
    ]}
  />
)
```

<code src="./demos/query/layout1" />

### 完全自定义

使用 `renderQueryFields` 属性进行更灵活的自定义

函数获得的参数有以下几个

- renderField：渲染单个 field，可传入 field 的 name 属性，或者是 field 对象配置
- renderFields：渲染多个 fields，可传入一维数组、二维数组（与 queryFields 二维规则类似）
- rawActions：没有包裹 Form.Item 的按钮组
- actions：包裹了 Form.Item 的按钮组
- query：查询按钮
- reset：重置按钮
- fold：更多按钮
- showMore：是否更多

**此种布局方式下，查询按钮组中不会显示 “更多” 按钮，且默认不出现，需要渲染 actions 参数**

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
    ]}
    renderQueryFields={({ renderField, renderFields, actions, query, reset, fold, showMore }) => {
      const [count, setCount] = useState(0)

      return (
        <>
          <div>count: {count}</div>
          <div>showMore: {String(showMore)}</div>
          {renderField('text2')}
          {renderFields([
            [fold],
            ['text1', <button onClick={() => setCount(count + 1)}>+</button>, 'text2'],
            ['text3', actions],
            ['text1', 'text2', 'text3'],
            [
              { name: 'text2', colSpan: 16 },
              { name: 'text1', colSpan: 8 },
            ],
            [
              { colSpan: 16, content: <div>{query}</div> },
              { colSpan: 8, content: <div>{reset}</div> },
            ],
          ])}
        </>
      )
    }}
  />
)
```

<code src="./demos/query/layout2" />

## 内置的表单类型

- 文本 type="text"
- 单选框 type="select"
- 密码 type="password"
- 金额 type="money"
- 文本域 type="textarea"
- 数字 type="digit"
- 多选框 type="multipleSelect"
- 多选 type="checkbox"
- 单选 type="radio"
- 单选按钮 type="radioButton"
- 日期 type="date"
- 日期时间 type="dateTime"
- 日期周 type="dateWeek"
- 日期月 type="dateMonth"
- 日期季度 type="dateQuarter"
- 日期年 type="dateYear"
- 日期范围 type="dateRange"
- 日期时间范围 type="dateTimeRange"
- 时间 type="time"
- 时间范围 type="timeRange"
- 开关 type="switch"
- 评分 type="rate"
- 级联 type="cascader"

<code src="./demos/query/types" />

## 自定义表单类型

使用 `renderField` 配置项自定义表单类型，将会作为 `Form.Item` 的直接子节点使用

```jsx | pure
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFields={[
      {
        label: '自定义文本框',
        name: 'text1',
        renderField: ({ fieldProps }) => <input placeholder="input text" {...fieldProps} />,
      },
    ]}
  />
)
```

```jsx
import React from 'react'
import { ProTable } from '@cjy0208/pro-components'
import { message } from 'antd'
import { delay } from '@cjy0208/tools'
export default () => (
  <ProTable
    queryFields={[
      {
        label: '自定义文本框',
        name: 'text1',
        renderField: ({ fieldProps }) => <input placeholder="input text" {...fieldProps} />,
      },
    ]}
    render={({ queryField }) => queryField}
    onQuery={async params => {
      message.info(`参数：${JSON.stringify(params)}`)
      await delay(1000) // 模拟查询接口延时
    }}
  />
)
```

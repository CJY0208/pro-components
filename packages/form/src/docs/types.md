---
nav:
  path: /pro-form

group:
  title: 类型

title: 类型
---

# 表单类型

## 内置类型

```tsx
import React from 'react'
import { delay } from '@cjy0208/tools'
import { Space, Card } from 'antd'
import { ProForm, ProField, ConfigProvider } from '@cjy0208/pro-components'
import '@cjy0208/pro-components/es/style.less'
import { Hook } from '@cjy0208/pro-utils'

const mockOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 },
]

const mockTreeOptions = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
]

export default () => {
  const [form] = ProForm.useForm()

  return (
    <ConfigProvider>
      <Space direction="vertical" style={{ width: '100%' }}>
        {/* 输入框 */}
        <Hook>
          {() => {
            const [readonly, setReadonly] = React.useState(false)

            return (
              <Card
                title={
                  <Space size="middle">
                    <div>输入框</div>
                    <ProField
                      noStyle
                      type="switch"
                      props={{
                        checked: readonly,
                        checkedChildren: '只读',
                        unCheckedChildren: '只读',
                        onChange: checked => {
                          setReadonly(checked)
                        },
                      }}
                    />
                  </Space>
                }
              >
                <ProForm
                  form={form}
                  mode={readonly ? 'view' : 'edit'}
                  preserve
                  fields={[
                    {
                      label: '文本',
                      tooltip: 'type="text" | type="input"',
                      name: 'text',
                      type: 'text',
                    },
                    {
                      label: '密码',
                      tooltip: 'type="password"',
                      name: 'password',
                      type: 'password',
                    },
                    {
                      label: '金额',
                      tooltip: 'type="money"',
                      name: 'money',
                      type: 'money',
                    },
                    {
                      label: '文本域',
                      tooltip: 'type="textarea"',
                      name: 'textarea',
                      type: 'textarea',
                    },
                    {
                      label: '数字',
                      tooltip: 'type="digit" | type="number"',
                      name: 'digit',
                      type: 'digit',
                    },
                  ]}
                />
              </Card>
            )
          }}
        </Hook>

        {/* 选择框 */}
        <Hook>
          {() => {
            const [readonly, setReadonly] = React.useState(false)

            return (
              <Card
                title={
                  <Space size="middle">
                    <div>选择框类型</div>
                    <ProField
                      noStyle
                      type="switch"
                      props={{
                        checked: readonly,
                        checkedChildren: '只读',
                        unCheckedChildren: '只读',
                        onChange: checked => {
                          setReadonly(checked)
                        },
                      }}
                    />
                  </Space>
                }
              >
                <ProForm
                  form={form}
                  mode={readonly ? 'view' : 'edit'}
                  preserve
                  fields={[
                    {
                      label: '单选框',
                      tooltip: 'type="select"',
                      name: 'select',
                      type: 'select',
                      options: mockOptions,
                    },
                    {
                      label: '多选框',
                      tooltip: 'type="multipleSelect"',
                      name: 'multipleSelect',
                      type: 'multipleSelect',
                      options: mockOptions,
                    },
                    {
                      label: '级联',
                      tooltip: 'type="cascader"',
                      name: 'cascader',
                      type: 'cascader',
                      options: [
                        {
                          value: 'zhejiang',
                          label: 'Zhejiang',
                          children: [
                            {
                              value: 'hangzhou',
                              label: 'Hangzhou',
                              children: [
                                {
                                  value: 'xihu',
                                  label: 'West Lake',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          value: 'jiangsu',
                          label: 'Jiangsu',
                          children: [
                            {
                              value: 'nanjing',
                              label: 'Nanjing',
                              children: [
                                {
                                  value: 'zhonghuamen',
                                  label: 'Zhong Hua Men',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: '树形单选框',
                      tooltip: 'type="treeSelect"',
                      name: 'treeSelect',
                      type: 'treeSelect',
                      options: mockTreeOptions,
                    },
                    {
                      label: '树形多选框',
                      tooltip: 'type="multipleTreeSelect"',
                      name: 'multipleTreeSelect',
                      type: 'multipleTreeSelect',
                      options: mockTreeOptions,
                    },
                  ]}
                />
              </Card>
            )
          }}
        </Hook>

        {/* 日期 / 时间 */}
        <Hook>
          {() => {
            const [readonly, setReadonly] = React.useState(false)

            return (
              <Card
                title={
                  <Space size="middle">
                    <div>日期 / 时间</div>
                    <ProField
                      noStyle
                      type="switch"
                      props={{
                        checked: readonly,
                        checkedChildren: '只读',
                        unCheckedChildren: '只读',
                        onChange: checked => {
                          setReadonly(checked)
                        },
                      }}
                    />
                  </Space>
                }
              >
                <ProForm
                  form={form}
                  mode={readonly ? 'view' : 'edit'}
                  preserve
                  fields={[
                    {
                      label: '日期',
                      tooltip: 'type="date"',
                      name: 'date',
                      type: 'date',
                    },
                    {
                      label: '日期时间',
                      tooltip: 'type="dateTime"',
                      name: 'dateTime',
                      type: 'dateTime',
                    },
                    {
                      label: '日期周',
                      tooltip: 'type="dateWeek"',
                      name: 'dateWeek',
                      type: 'dateWeek',
                    },
                    {
                      label: '日期月',
                      tooltip: 'type="dateMonth"',
                      name: 'dateMonth',
                      type: 'dateMonth',
                    },
                    {
                      label: '日期季度',
                      tooltip: 'type="dateQuarter"',
                      name: 'dateQuarter',
                      type: 'dateQuarter',
                    },
                    {
                      label: '日期年',
                      tooltip: 'type="dateYear"',
                      name: 'dateYear',
                      type: 'dateYear',
                    },
                    {
                      label: '日期范围',
                      tooltip: 'type="dateRange"',
                      name: 'dateRange',
                      type: 'dateRange',
                    },
                    {
                      label: '日期时间范围',
                      tooltip: 'type="dateTimeRange"',
                      name: 'dateTimeRange',
                      type: 'dateTimeRange',
                    },
                    {
                      label: '时间',
                      tooltip: 'type="time"',
                      name: 'time',
                      type: 'time',
                    },
                    {
                      label: '时间范围',
                      tooltip: 'type="timeRange"',
                      name: 'timeRange',
                      type: 'timeRange',
                    },
                  ]}
                />
              </Card>
            )
          }}
        </Hook>

        {/* 选择按钮 */}
        <Hook>
          {() => {
            const [readonly, setReadonly] = React.useState(false)

            return (
              <Card
                title={
                  <Space size="middle">
                    <div>选择按钮</div>
                    <ProField
                      noStyle
                      type="switch"
                      props={{
                        checked: readonly,
                        checkedChildren: '只读',
                        unCheckedChildren: '只读',
                        onChange: checked => {
                          setReadonly(checked)
                        },
                      }}
                    />
                  </Space>
                }
              >
                <ProForm
                  form={form}
                  mode={readonly ? 'view' : 'edit'}
                  preserve
                  fields={[
                    {
                      label: '多选',
                      tooltip: 'type="checkbox"',
                      name: 'checkbox',
                      type: 'checkbox',
                      options: mockOptions,
                    },
                    {
                      label: '单选',
                      tooltip: 'type="radio"',
                      name: 'radio',
                      type: 'radio',
                      options: mockOptions,
                    },
                    {
                      label: '单选按钮',
                      tooltip: 'type="radioButton"',
                      name: 'radioButton',
                      type: 'radioButton',
                      options: mockOptions,
                    },
                  ]}
                />
              </Card>
            )
          }}
        </Hook>

        {/* 其他 */}
        <Hook>
          {() => {
            const [readonly, setReadonly] = React.useState(false)

            return (
              <Card
                title={
                  <Space size="middle">
                    <div>其他</div>
                    <ProField
                      noStyle
                      type="switch"
                      props={{
                        checked: readonly,
                        checkedChildren: '只读',
                        unCheckedChildren: '只读',
                        onChange: checked => {
                          setReadonly(checked)
                        },
                      }}
                    />
                  </Space>
                }
              >
                <ProForm
                  form={form}
                  mode={readonly ? 'view' : 'edit'}
                  preserve
                  fields={[
                    [
                      {
                        label: '开关',
                        tooltip: 'type="switch"',
                        name: 'switch',
                        type: 'switch',
                      },
                      {
                        label: '评分',
                        tooltip: 'type="rate"',
                        name: 'rate',
                        type: 'rate',
                      },
                    ],
                    [
                      {
                        label: '穿梭框',
                        tooltip: 'type="transfer"',
                        name: 'transfer',
                        type: 'transfer',
                        options: mockOptions,
                      },
                    ],
                  ]}
                />
              </Card>
            )
          }}
        </Hook>
      </Space>
    </ConfigProvider>
  )
}
```

## 选项 options 配置

### 数组

```jsx | pure
import { ProForm } from '@cjy0208/pro-components'
export default () => (
  <ProForm
    fields={[
      {
        label: '选择框',
        name: 'select',
        type: 'select',
        options: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
          { label: '选项3', value: 3 },
          { label: '选项4', value: 4 },
          { label: '选项5', value: 5 },
        ],
      },
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProForm } from '@cjy0208/pro-components'
import { message } from 'antd'
import { delay } from '@cjy0208/tools'
export default () => (
  <div style={{ padding: 24, background: 'white' }}>
    <ProForm
      fields={[
        {
          label: '选择框',
          name: 'select',
          type: 'select',
          options: [
            { label: '选项1', value: 1 },
            { label: '选项2', value: 2 },
            { label: '选项3', value: 3 },
          ],
        },
        {
          label: '单选按钮',
          name: 'radio',
          type: 'radio',
          options: [
            { label: '选项1', value: 1 },
            { label: '选项2', value: 2 },
            { label: '选项3', value: 3 },
          ],
        },
        {
          label: '复选按钮',
          name: 'checkbox',
          type: 'checkbox',
          options: [
            { label: '选项1', value: 1 },
            { label: '选项2', value: 2 },
            { label: '选项3', value: 3 },
          ],
        },
      ]}
    />
  </div>
)
```

### 异步函数

```jsx | pure
import { ProForm } from '@cjy0208/pro-components'
import { delay } from '@cjy0208/tools'
export default () => (
  <ProForm
    fields={[
      {
        label: '选择框',
        name: 'select',
        type: 'select',
        options: async () => {
          await delay(1000)

          return [
            { label: '选项1', value: 1 },
            { label: '选项2', value: 2 },
            { label: '选项3', value: 3 },
          ]
        },
      },
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProForm } from '@cjy0208/pro-components'
import { message } from 'antd'
import { delay } from '@cjy0208/tools'
export default () => (
  <div style={{ padding: 24, background: 'white' }}>
    <ProForm
      fields={[
        {
          label: '选择框',
          name: 'select',
          type: 'select',
          options: async () => {
            await delay(1000)

            return [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
              { label: '选项3', value: 3 },
            ]
          },
        },
        {
          label: '单选按钮',
          name: 'radio',
          type: 'radio',
          options: async () => {
            await delay(1000)

            return [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
              { label: '选项3', value: 3 },
            ]
          },
        },
        {
          label: '复选按钮',
          name: 'checkbox',
          type: 'checkbox',
          options: async () => {
            await delay(1000)

            return [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
              { label: '选项3', value: 3 },
            ]
          },
        },
      ]}
    />
  </div>
)
```

### `useRequest` 实例

```jsx | pure
import { ProForm } from '@cjy0208/pro-components'
import { useRequest } from 'ahooks'
import { delay } from '@cjy0208/tools'
export default () => {
  const optionService = useRequest(async () => {
    await delay(1000)

    return [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
    ]
  })

  return (
    <ProForm
      fields={[
        {
          label: '选择框',
          name: 'select',
          type: 'select',
          options: optionService,
        },
      ]}
    />
  )
}
```

```tsx
import React from 'react'
import { ProForm } from '@cjy0208/pro-components'
import { message } from 'antd'
import { useRequest } from 'ahooks'
import { delay } from '@cjy0208/tools'
export default () => {
  const optionService = useRequest(async () => {
    await delay(1000)

    return [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
    ]
  })

  return (
    <div style={{ padding: 24, background: 'white' }}>
      <ProForm
        fields={[
          {
            label: '选择框',
            name: 'select',
            type: 'select',
            options: optionService,
          },
          {
            label: '单选按钮',
            name: 'radio',
            type: 'radio',
            options: optionService,
          },
          {
            label: '复选按钮',
            name: 'checkbox',
            type: 'checkbox',
            options: optionService,
          },
        ]}
      />
    </div>
  )
}
```

## 自定义类型

使用 `renderField` 配置项自定义表单类型，将会作为 `Form.Item` 的直接子节点使用

```jsx | pure
import { ProForm } from '@cjy0208/pro-components'
export default () => (
  <ProForm
    fields={[
      {
        label: '自定义文本框',
        name: 'text1',
        renderField: ({ fieldProps }) => <input placeholder="input text" {...fieldProps} />,
      },
    ]}
  />
)
```

```tsx
import React from 'react'
import { ProForm } from '@cjy0208/pro-components'
import { message } from 'antd'
import { delay } from '@cjy0208/tools'
export default () => (
  <div style={{ padding: 24, background: 'white' }}>
    <ProForm
      fields={[
        {
          label: '自定义文本框',
          name: 'text1',
          renderField: ({ fieldProps }) => <input placeholder="input text" {...fieldProps} />,
        },
      ]}
    />
  </div>
)
```

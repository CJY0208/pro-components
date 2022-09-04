---
nav:
  path: /pro-form

group:
  title: 关联

title: 关联
---

# 表单关联

通过 `hook` 配置项实现动态关联，可以写 react 的 hooks 来存储一些中间状态

<!-- prettier-ignore -->
```jsx | pure
import { ProForm } from '@cjy0208/pro-components'
export default () => (
  <ProForm
    fields={[
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

```tsx
import React from 'react'
import { ProForm, ProField } from '@cjy0208/pro-components'
import '@cjy0208/pro-components/es/style.less'

import { useDebounceEffect } from 'ahooks'
import { message, Tag, Space } from 'antd'
import { delay } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 },
]

export default () => (
  <div style={{ padding: 24, background: 'white' }}>
    <ProForm
      fields={[
        { label: '文本', name: 'text' },
        {
          label: '单选框',
          name: 'select',
          type: 'select',
          dependencies: ['text'],
          hook: ({ form }) => {
            const textValue = form.getFieldValue('text')
            const disabled = !textValue

            useDebounceEffect(
              () => {
                if (textValue) {
                  message.info(`text 发生了变化：${textValue}`)
                }

                form.setFieldsValue({
                  select: undefined,
                })
              },
              [textValue],
              { wait: 500 },
            )

            const overrideConfig: any = {
              tooltip: !disabled && `选项会根据文本框变化，当前内容：${textValue}`,
              disabled,
              options: textValue ? [{ label: textValue, value: textValue }] : [],
            }

            if (disabled) {
              overrideConfig.label = (
                <Space>
                  单选框
                  <Tag color="orange">文本框需要先写点儿啥</Tag>
                </Space>
              )
            }

            return overrideConfig
          },
        },
      ]}
    />
  </div>
)
```

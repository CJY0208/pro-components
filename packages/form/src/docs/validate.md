---
nav:
  path: /pro-form

group:
  title: 校验

title: 校验
order: 3
---

# 表单校验

- 通过 `required` 属性简单配置必填规则，可传入 string 类型作为提示语
- 通过 `rules` 属性配置详细的校验规则，具体使用同 `<Form.Item rules={[...]}>`，配置此选项时 `required` 将失效

<!-- prettier-ignore -->
```jsx | pure
import { ProForm } from '@cjy0208/pro-components'
export default () => (
  <ProForm
    fields={[
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

```tsx
import React from 'react'
import { ProForm, ProField } from '@cjy0208/pro-components'
import { Action } from '@cjy0208/pro-utils'
import { Space, message } from 'antd'
import { delay } from '@cjy0208/tools'

export default () => (
  <div style={{ padding: 24, background: 'white' }}>
    <ProForm
      fields={[
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
      render={({ renderFields, form }) => (
        <>
          {renderFields([
            'text',
            'select',
            <ProForm.Item>
              <Space style={{ justifyContent: 'flex-end' }}>
                <Action
                  type="primary"
                  content="提交"
                  onClick={() => {
                    form.validateFields()
                  }}
                />
                <Action
                  content="重置"
                  onClick={() => {
                    form.resetFields()
                  }}
                />
              </Space>
            </ProForm.Item>,
          ])}
        </>
      )}
    />
  </div>
)
```

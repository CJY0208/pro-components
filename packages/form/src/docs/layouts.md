---
nav:
  path: /pro-form

group:
  title: 布局

title: 布局
order: 2
---

# 表单布局

## 内置 Grid 布局

ProForm 内置了基于 antd Row/Col 的 Grid 布局

可以简单通过 `gridColumns`、`gridGutter` 属性进行调整

- `gridGutter` 默认为 16，即横向间隔 16px，纵向间隔 0
- `gridColumns` 默认为 3，即一行 3 个

```tsx
/**
 * inline: false
 * defaultShowCode: false
 */
import React, { useState, useEffect } from 'react'
import { message, Drawer, Space, Form, Radio, Slider } from 'antd'
import { isObject, random, run, sample } from '@cjy0208/tools'

import dayjs from 'dayjs'
import { useDebounce, useLocalStorageState, useDebounceFn } from 'ahooks'
import { ProForm } from '@cjy0208/pro-components'
import { Action } from '@cjy0208/pro-utils'
import '@cjy0208/pro-components/es/style.less'

const gutters: Record<string, number> = {}
const vgutters: Record<string, number> = {}
const colCounts: Record<string, number> = {}
;[0, 8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value
})
;[0, 8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value
})
;[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value
})

export default () => {
  const [form] = ProForm.useForm()
  const [gutterKey, setGutterKey] = useState(2)
  const [vgutterKey, setVgutterKey] = useState(0)
  const [colCountKey, setColCountKey] = useState(1)

  return (
    <div style={{ padding: 24, background: 'white' }}>
      <span>Horizontal Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(gutters).length - 1}
          value={gutterKey}
          onChange={setGutterKey}
          marks={gutters}
          step={null}
          tipFormatter={value => value && gutters[value]}
        />
      </div>
      <span>Vertical Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(vgutters).length - 1}
          value={vgutterKey}
          onChange={setVgutterKey}
          marks={vgutters}
          step={null}
          tipFormatter={value => value && vgutters[value]}
        />
      </div>
      <span>Column Count:</span>
      <div style={{ width: '50%', marginBottom: 48 }}>
        <Slider
          min={0}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={setColCountKey}
          marks={colCounts}
          step={null}
          tipFormatter={value => value && colCounts[value]}
        />
      </div>

      <Space className="w-full" direction="vertical">
        <ProForm
          form={form}
          gridGutter={[gutters[gutterKey], vgutters[vgutterKey]]}
          gridColumns={colCounts[colCountKey]}
          fields={[
            {
              required: true,
              tooltip: '???',
              label: 'test',
              name: ['data', 'test'],
              type: 'dateRange',
            },
            {
              required: true,
              label: 'test2',
              name: 'test2',
              type: 'select',
            },
            {
              required: true,
              label: 'test3',
              name: 'test3',
              type: 'date',
            },
            {
              required: true,
              label: 'test4',
              name: 'test4',
              type: 'text',
            },
            {
              required: true,
              label: 'test5',
              name: 'test5',
              type: 'dateRange',
            },
            {
              required: true,
              label: 'test6',
              name: 'test6',
              type: 'select',
            },
          ]}
        />

        <Space className="w-full" style={{ justifyContent: 'flex-end' }}>
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
      </Space>
    </div>
  )
}
```

## 完全自定义

可通过 `render` 属性对表单布局进行完全自定义的调整

```tsx
/**
 * inline: false
 * defaultShowCode: true
 */
import React, { useState, useEffect } from 'react'
import { message, Drawer, Space, Form, Radio } from 'antd'
import { isObject, random, run, sample } from '@cjy0208/tools'

import dayjs from 'dayjs'
import { useDebounce, useLocalStorageState, useDebounceFn } from 'ahooks'
import { ProForm } from '@cjy0208/pro-components'
import { Action } from '@cjy0208/pro-utils'
import '@cjy0208/pro-components/es/style.less'

export default () => {
  const [form] = ProForm.useForm()
  return (
    <div style={{ padding: 24, background: 'white' }}>
      <ProForm
        form={form}
        fields={[
          {
            required: true,
            tooltip: '???',
            label: 'test',
            name: ['data', 'test'],
            type: 'dateRange',
          },
          {
            required: true,
            label: 'test2',
            name: 'test2',
            type: 'select',
          },
          {
            required: true,
            label: 'test3',
            name: 'test3',
            type: 'date',
          },
          {
            required: true,
            label: 'test4',
            name: 'test4',
            type: 'text',
          },
          {
            required: true,
            label: 'test5',
            name: 'test5',
            type: 'dateRange',
          },
          {
            required: true,
            label: 'test6',
            name: 'test6',
            type: 'select',
          },
        ]}
        render={[
          [
            {
              name: ['data', 'test'],
              type: 'cascader',
              colSpan: 8,
            },
            { colSpan: 8 },
            {
              name: 'test6',
              colSpan: 8,
            },
          ],
          [
            { name: 'test4', colSpan: 16 },
            {
              colSpan: 8,
              content: (
                <Form.Item label=" ">
                  <Space style={{ justifyContent: 'right' }}>
                    <Action
                      type="primary"
                      content="提交"
                      onClick={async () => {
                        await form.validateFields()
                      }}
                    />
                    <Action
                      content="重置"
                      onClick={async () => {
                        form.resetFields()
                      }}
                    />
                  </Space>
                </Form.Item>
              ),
            },
          ],
          [{ colSpan: 8 }, 'test3'],
          ['test4', 'test5', ['data', 'test']],
          ['test', 'test6'],
          ['test3'],
          ['test4', 'test5', 'test2'],
        ]}
      />
    </div>
  )
}
```

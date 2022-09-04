/**
 * inline: false
 * defaultShowCode: false
 */
import { useState, useEffect } from 'react'
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
    <>
      <ProForm
        form={form}
        fields={[
          {
            required: true,
            tooltip: '???',
            label: 'test',
            name: ['data', 'test'],
            type: 'dateRange',
            // colSpan: 16,
          },
          {
            required: true,
            label: 'test2',
            name: 'test2',
            type: 'select',
            // colSpan: 8,
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
                  <Space style={{ justifyContent: 'right' }} direction="vertical">
                    <Action
                      type="primary"
                      content="提交"
                      onClick={async () => {
                        await form.validateFields()
                      }}
                      // menu={[
                      //   {
                      //     label: 'test',
                      //     disabled: true,
                      //     onClick() {
                      //       console.log('aaa')
                      //     },
                      //   },
                      // ]}
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
    </>
  )
}

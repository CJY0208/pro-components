/* eslint-disable react-hooks/rules-of-hooks */
import { ProTable } from '@cjy0208/pro-components'

import { useDebounceEffect } from 'ahooks'
import { message, Tag, Space } from 'antd'
import { delay } from '@cjy0208/tools'

export default () => (
  <ProTable
    queryFields={[
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
    manualQuery
    onQuery={async params => {
      message.info(`参数：${JSON.stringify(params)}`)
      await delay(1000) // 模拟查询接口延时
    }}
    render={({ queryField }) => queryField} // 仅渲染查询区域
  />
)

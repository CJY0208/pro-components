import { ProTable } from '@cjy0208/pro-components'
import '@cjy0208/pro-components/es/style.less'

import { message } from 'antd'
import { delay } from '@cjy0208/tools'

const mockOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
  { label: '选项5', value: 5 },
]

export default () => (
  <ProTable
    manualQuery
    onQuery={async params => {
      message.info(`参数：${JSON.stringify(params)}`)
      await delay(1000) // 模拟查询接口延时
    }}
    columns={[
      { title: '文本', dataIndex: 'text', valueType: 'text', queryField: true },
      {
        title: '单选框',
        dataIndex: 'select',
        valueType: 'select',
        valueEnum: mockOptions,
        queryField: true,
      },
      { title: '密码', dataIndex: 'password', valueType: 'password', queryField: true },
      { title: '金额', dataIndex: 'money', valueType: 'money', queryField: true },
      { title: '文本域', dataIndex: 'textarea', valueType: 'textarea', queryField: true },
      { title: '数字', dataIndex: 'digit', valueType: 'digit', queryField: true, hidden: true },
      {
        title: '多选框',
        dataIndex: 'multipleSelect',
        valueType: 'multipleSelect',
        valueEnum: mockOptions,
        queryField: true,
        hidden: true,
      },
      {
        title: '多选',
        dataIndex: 'checkbox',
        valueType: 'checkbox',
        valueEnum: mockOptions,
        queryField: true,
        hidden: true,
      },
      { title: '单选', dataIndex: 'radio', valueType: 'radio', valueEnum: mockOptions, queryField: true, hidden: true },
      {
        title: '单选按钮',
        dataIndex: 'radioButton',
        valueType: 'radioButton',
        valueEnum: mockOptions,
        queryField: true,
        hidden: true,
      },
      { title: '日期', dataIndex: 'date', valueType: 'date', queryField: true, hidden: true },
      { title: '日期时间', dataIndex: 'dateTime', valueType: 'dateTime', queryField: true, hidden: true },
      { title: '日期周', dataIndex: 'dateWeek', valueType: 'dateWeek', queryField: true, hidden: true },
      { title: '日期月', dataIndex: 'dateMonth', valueType: 'dateMonth', queryField: true, hidden: true },
      { title: '日期季度', dataIndex: 'dateQuarter', valueType: 'dateQuarter', queryField: true, hidden: true },
      { title: '日期年', dataIndex: 'dateYear', valueType: 'dateYear', queryField: true, hidden: true },
      { title: '日期范围', dataIndex: 'dateRange', valueType: 'dateRange', queryField: true, hidden: true },
      { title: '日期时间范围', dataIndex: 'dateTimeRange', valueType: 'dateTimeRange', queryField: true, hidden: true },
      { title: '时间', dataIndex: 'time', valueType: 'time', queryField: true, hidden: true },
      { title: '时间范围', dataIndex: 'timeRange', valueType: 'timeRange', queryField: true, hidden: true },
      { title: '开关', dataIndex: 'switch', valueType: 'switch', queryField: true, hidden: true },
      { title: '评分', dataIndex: 'rate', valueType: 'rate', queryField: true, hidden: true },
      {
        title: '级联',
        dataIndex: 'cascader',
        valueType: 'cascader',
        valueEnum: [
          {
            label: '第一层',
            value: 'level1',
            children: [
              {
                label: '第二层',
                value: 'level2',
                children: mockOptions,
              },
              ...mockOptions,
            ],
          },
          ...mockOptions,
        ],
        queryField: true,
        hidden: true,
      },
    ]}
  />
)

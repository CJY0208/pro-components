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
    queryFields={[
      { label: '文本', tooltip: 'type="text"', name: 'text', type: 'text' },
      { label: '单选框', tooltip: 'type="select"', name: 'select', type: 'select', options: mockOptions },
      { label: '密码', tooltip: 'type="password"', name: 'password', type: 'password' },
      { label: '金额', tooltip: 'type="money"', name: 'money', type: 'money' },
      { label: '文本域', tooltip: 'type="textarea"', name: 'textarea', type: 'textarea' },
      { label: '数字', tooltip: 'type="digit"', name: 'digit', type: 'digit' },
      {
        label: '多选框',
        tooltip: 'type="multipleSelect"',
        name: 'multipleSelect',
        type: 'multipleSelect',
        options: mockOptions,
      },
      { label: '多选', tooltip: 'type="checkbox"', name: 'checkbox', type: 'checkbox', options: mockOptions },
      { label: '单选', tooltip: 'type="radio"', name: 'radio', type: 'radio', options: mockOptions },
      {
        label: '单选按钮',
        tooltip: 'type="radioButton"',
        name: 'radioButton',
        type: 'radioButton',
        options: mockOptions,
      },
      { label: '日期', tooltip: 'type="date"', name: 'date', type: 'date' },
      { label: '日期时间', tooltip: 'type="dateTime"', name: 'dateTime', type: 'dateTime' },
      { label: '日期周', tooltip: 'type="dateWeek"', name: 'dateWeek', type: 'dateWeek' },
      { label: '日期月', tooltip: 'type="dateMonth"', name: 'dateMonth', type: 'dateMonth' },
      { label: '日期季度', tooltip: 'type="dateQuarter"', name: 'dateQuarter', type: 'dateQuarter' },
      { label: '日期年', tooltip: 'type="dateYear"', name: 'dateYear', type: 'dateYear' },
      { label: '日期范围', tooltip: 'type="dateRange"', name: 'dateRange', type: 'dateRange' },
      { label: '日期时间范围', tooltip: 'type="dateTimeRange"', name: 'dateTimeRange', type: 'dateTimeRange' },
      { label: '时间', tooltip: 'type="time"', name: 'time', type: 'time' },
      { label: '时间范围', tooltip: 'type="timeRange"', name: 'timeRange', type: 'timeRange' },
      { label: '开关', tooltip: 'type="switch"', name: 'switch', type: 'switch' },
      { label: '评分', tooltip: 'type="rate"', name: 'rate', type: 'rate' },
      {
        label: '级联',
        tooltip: 'type="cascader"',
        name: 'cascader',
        type: 'cascader',
        options: [
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
      },
    ]}
    render={({ queryField }) => queryField} // 仅渲染查询区域
    manualQuery
    onQuery={async params => {
      message.info(`参数：${JSON.stringify(params)}`)
      await delay(1000) // 模拟查询接口延时
    }}
    queryFieldDefaultLength={100}
  />
)

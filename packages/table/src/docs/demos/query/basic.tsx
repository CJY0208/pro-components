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

const mockData = getMockData()

export default () => (
  <ProTable
    queryFields={[
      { label: '文本', name: 'text', type: 'text' },
      {
        label: '单选框',
        name: 'select',
        type: 'select',
        options: mockOptions,
      },
    ]}
    onQuery={async params => {
      await delay(random(300, 1000)) // 模拟查询接口延时

      const { page, pageSize } = params
      const queryData = mockData.filter(
        item =>
          (!params?.text || item?.value1?.includes(params?.text ?? '')) && // 模拟文本筛选
          (!params?.select || params?.select === item?.value2), // 模拟单选筛选
      )

      const data = queryData.slice((page - 1) * pageSize, page * pageSize)

      return {
        success: true,
        data,
        total: queryData?.length,
      }
    }}
    columns={[
      {
        title: '项目 1',
        dataIndex: 'value1',
        width: 120,
      },
      {
        title: '项目 2',
        dataIndex: 'value2',
        width: 120,
        valueType: 'select',
        valueEnum: mockOptions,
      },
    ]}
  />
)

function getMockData() {
  return Array(200)
    .fill('')
    .map((_, idx) => ({
      id: `key_${idx + 1}`,
      ...Object.assign(
        {},
        ...Array(2)
          .fill('')
          .map((_, idx) => ({
            [`value${idx + 1}`]: run(() => {
              const valueType = getMockDataType(idx + 1)

              const dataMap = {
                select: sample<any>(mockOptions)?.value,
                text: Random.name(),
              }

              // // 随机数据破缺
              // if (random(0, 10) > 8) {
              //   return undefined
              // }

              if (valueType in dataMap) {
                return dataMap[valueType]
              }

              return Random.name()
            }),
          })),
      ),
    }))
}

function getMockDataType(idx: number) {
  if (idx % 2 === 0) {
    return 'select'
  }

  return 'text'
}

/* eslint-disable react-hooks/rules-of-hooks */
import { ProTable } from '@cjy0208/pro-components'

export default () => (
  <ProTable
    queryFields={[
      [
        { label: '文本1', name: 'text1' },
        { label: '文本2', name: 'text2' },
      ],
      [{ label: '文本3', name: 'text3' }],
      [
        { label: '文本4', name: 'text4' },
        { label: '文本5', name: 'text5' },
        { label: '文本6', name: 'text6' },
      ],
      [
        { label: '文本7', name: 'text7', colSpan: 16 }, // 占 2/3 (16 / 24)
        { label: '文本8', name: 'text8', colSpan: 8 }, // 占 1/3 (8 / 24)
      ],
    ]}
    render={({ queryField }) => queryField} // 仅渲染查询区域
  />
)

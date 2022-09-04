/* eslint-disable react-hooks/rules-of-hooks */
import { ProTable } from '@cjy0208/pro-components'

export default () => (
  <ProTable
    queryFieldOrder={['text5', 'text3']}
    queryFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
      { label: '文本4', name: 'text4' },
      { label: '文本5', name: 'text5' },
      { label: '文本6', name: 'text6' },
    ]}
    render={({ queryField }) => queryField} // 仅渲染查询区域
  />
)

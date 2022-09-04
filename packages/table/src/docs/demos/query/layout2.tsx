import { useState } from 'react'
import { ProTable } from '@cjy0208/pro-components'
export default () => (
  <ProTable
    queryFields={[
      { label: '文本1', name: 'text1' },
      { label: '文本2', name: 'text2' },
      { label: '文本3', name: 'text3' },
    ]}
    renderQueryFields={({ renderField, renderFields, actions, query, reset, fold, showMore }) => {
      const [count, setCount] = useState(0)

      return (
        <>
          <div>count: {count}</div>
          <div>showMore: {String(showMore)}</div>
          {renderField('text2')}
          {renderFields([
            [fold],
            ['text1', <button onClick={() => setCount(count + 1)}>+</button>, 'text2'],
            ['text3', actions],
            ['text1', 'text2', 'text3'],
            [
              { name: 'text2', colSpan: 16 },
              { name: 'text1', colSpan: 8 },
            ],
            [
              { colSpan: 16, content: <div>{query}</div> },
              { colSpan: 8, content: <div>{reset}</div> },
            ],
          ])}
        </>
      )
    }}
    render={({ queryField }) => queryField} // 仅渲染查询区域
  />
)

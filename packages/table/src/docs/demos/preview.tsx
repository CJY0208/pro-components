/**
 * inline: false
 * defaultShowCode: false
 */
import { useState, useEffect } from 'react'
import { message, Drawer, Space, Form, Radio } from 'antd'
import { isObject, random, run, sample } from '@cjy0208/tools'
import * as globalTools from '@cjy0208/tools/es'
import dayjs from 'dayjs'
import { ProTable } from '@cjy0208/pro-components'
import { Action } from '@cjy0208/pro-utils'
import '@cjy0208/pro-components/es/style.less'

import MonacoEditor from './components/MonacoEditor'
import { useDebounce, useLocalStorageState, useDebounceFn } from 'ahooks'

// @ts-ignore
window.dayjs = dayjs

export default () => {
  const defaultCode = useDefaultCode()
  const [editorVisible, setEditorVisible] = useState(false)
  const [code, setCode] = useLocalStorageState('preview-demo-code', {
    defaultValue: defaultCode,
  })
  const debouncedSetCode = useDebounceFn(setCode, { wait: 3000 })
  const debouncedCode = useDebounce(code, { wait: 120 })
  const [config, setConfig] = useState(() => {
    try {
      const props = new Function(code)()
      return props
    } catch (err) {
      const props = new Function(defaultCode)()
      return props
    }
  })

  useEffect(() => {
    try {
      const props = new Function(debouncedCode)()

      if (!isObject(props)) {
        console.log(props)
        console.warn('返回内容并非对象，忽略')
        return
      }

      setConfig(props)
      message.info('配置已更新')
    } catch (err) {
      console.warn(err)
      console.warn('语法解析错误，忽略')
    }
  }, [debouncedCode])

  return (
    <div>
      <ProTable
        {...config}
        // queryFields={[
        //   [
        //     { label: 'test1', name: 'test1', colSpan: 16 },
        //     { label: 'test2', name: 'test2', colSpan: 8 },
        //   ],
        //   [
        //     { label: 'test3', name: 'test3' },
        //     { label: 'test4', name: 'test4' },
        //     { label: 'test5', name: 'test5' },
        //   ],
        //   [{ label: 'test6', name: 'test6' }],
        // ]}
        // renderQueryFields={({ renderFields, actions, showMore }) => {

        //   return renderFields([
        //     ['test1', 'test2'],
        //     ['test3', 'test4', 'test5'],
        //     ['test6', 'test7', <Form.Item label=" ">{actions}</Form.Item>],
        //   ])
        // }}
        iconActions={[
          ...(config?.iconActions ?? []),
          {
            builtIn: 'settings',
            onClick: () => setEditorVisible(visible => !visible),
            tooltip: {
              title: '点我！实时编辑表格的配置',
              defaultVisible: true,
              placement: 'topRight',
              color: 'volcano',
            },
          },
        ]}
      />
      <Drawer
        title={
          <Space>
            写完后 3s 生效，语法有错误的话不生效，写完后会做本地持久化
            <Action
              tooltip={{
                title: '将编辑器的代码还原为默认状态',
                placement: 'bottom',
              }}
              confirm={{
                title: '确定要重置吗？你的自定义配置将全部丢失',
                placement: 'bottom',
              }}
              onClick={() => {
                setCode(defaultCode)
                message.info('配置已重置')
              }}
            >
              重置
            </Action>
          </Space>
        }
        visible={editorVisible}
        width="80vw"
        onClose={() => setEditorVisible(false)}
        destroyOnClose
        contentWrapperStyle={{ maxWidth: 1280 }}
        bodyStyle={{ padding: 0, overflow: 'hidden' }}
        // style={{ maxWidth: 800 }}
      >
        <MonacoEditor
          width="100%"
          height="100%"
          language="javascript"
          theme="monokai"
          defaultValue={code}
          onChange={debouncedSetCode.run}
          options={{
            tabSize: 2,
          }}
        />
      </Drawer>
    </div>
  )
}

const mockData = getMockData()

Object.assign(window, {
  message,
  dayjs,
  globalTools,
  mockData,
  getMockDataType,
})

const defaultCode = `const { mockData, message, dayjs, getMockDataType } = window
 const { delay, memoize } = window.globalTools

 const getOptions = memoize(async () => {
   await delay(1000)

   return [
     { label: 'test', value: 1, tag: 'green' },
     { label: 'test2', value: 2, badge: 'processing' },
   ]
 })
 
 const props = {
   title: '表格示例（可在线编辑配置）',
   rowKey: 'id',
   selectable: true, // 可选择表格
   // 表格按钮动作，目前内置了新增动作
   actions: [{ content: '导出' }, { content: '打印' }, 'add'],
   // 表格 icon 按钮动作，目前内置了刷新、列设置动作
   iconActions: [
     {
       builtIn: 'refresh',
       confirm: '确定要刷新表格吗？',
       tooltip: '刷新表格（携带当前查询条件）',
     },
     'table-size',
     'fullscreen',
   ],
   // 多选动作，目前内置了批量删除 动作
   batchActions: [{ content: '批量导出', onClick: console.log }, 'delete'],
   fixColumnActions: true, // 是否固定动作栏到右侧
   // 表格项动作，目前内置了查看详情、编辑、删除动作
   columnActions: [
     'view',
     'edit',
     {
       builtIn: 'table-edit',
       content: '表格编辑',
     },
     'delete',
     {
       builtIn: 'view', // 可覆盖 builtIn 动作的属性
       type: 'ghost',
     },
     {
       actionType: 'switch',
       // checked: true,
       confirm: 'Swtich 动作确认？',
       tooltip: 'Swtich 动作提示',
       checkedChildren: '激活',
       unCheckedChildren: '禁用',
       content: 'test',
       onClick(...args) {
         console.log(...args)
       },
     },
     record => ({
       content: 'test',
       type: 'dashed',
       danger: true,
       confirm: '确认文案',
       async onClick() {
         await delay(1000)
         console.log(record)
       },
     }),
   ],
   columns: [
     ...Array(20)
       .fill('')
       .map((_, idx) => ({
         title: \`条目\${idx + 1}\`,
         key: \`value\${idx}\`,
         dataIndex: \`value\${idx}\`,
         // width: 120,
         tooltip: idx % 2 === 0 ? \`条目\${idx + 1} 的提示\` : null,
         sorter: (idx + 1) % 3 === 0 ? (a, b) => a?.[\`value\${idx}\`] - b?.[\`value\${idx}\`] : undefined,
         valueType: getMockDataType(idx),
         valueEnum: getOptions,
         copyable: getMockDataType(idx) === 'text' ? { tooltip: '可以复制哦' } : false,
         // render: idx === 3 ? (text) => <span>111{text}</span> : undefined,
         // 如果 queryField 存在，则此项会作为搜索表单内容
         queryField:
           idx < 7
             ? {
                 label: \`筛选项\${idx + 1}\`, // 默认继承 column.title
                 name: \`value\${idx + 1}\`, // 默认继承 column.dataIndex
                 // type: 'date', // 默认根据 column.valueType 变化
                 // options: [], // 默认继承 column.valueEnum，只限 select 模式
                 rules: [{ required: (idx + 1) % 3 === 0, message: '请填写' }],
                 // renderField: idx === 3 ? (text) => <input /> : undefined,
               }
             : undefined,
         // 如果 editField 存在，则此项会作为编辑表单内容，项配置同 queryField
         editField: ['select', 'dateRange'].includes(getMockDataType(idx))  ? undefined : {
           label: \`所属条目\${idx + 1}\`,
           required: getMockDataType(idx) === 'multipleSelect',
           // renderField: idx === 3 ? (text) => <input /> : undefined,
         },
         // 如果 addField 存在，则此项会作为新增表单内容，项配置同 queryField
         addField:
           (idx + 1) % 6 === 0
             ? undefined
             : {
                 tooltip: null,
                 label: \`新增条目\${idx + 1}\`,
               },
       })),
   ],
   // queryFields: {...} // 单独配置搜索表单，此项存在时，columns 内配置将失效
   // editFields: {...} // 单独配置编辑表单，此项存在时，columns 内配置将失效
   // addFields: {...} // 单独配置新增表单，此项存在时，columns 内配置将失效
   queryFieldColumns: 3, // 查询表单一行 N 个，默认值 3,
   queryFieldDefaultLines: 1, // 查询表单默认展示前 N 行, 默认为 1
   // queryFieldDefaultLength: 2, // 查询表单默认展示前 N 个, 无默认值，如果使用此项将覆盖 queryFieldDefaultLines 行为
   // queryFieldOrder: ['value3', 'value4', 'value1'], // 对 queryField 配置进行排序
   // renderModalEditFields: ({ renderFields, form }) => [ // 自定义 editField 的渲染区域，addField 也有
   //   renderFields(['value1', 'value2', () => {
   //     const value = form.getFieldValue('value1')
   //     return value === 'magic' ? 'value3' : undefined
   //   }]),
   //   renderFields(['value2', 'value1', 'value3']),
   // ],
   // renderModalAddFields: ... // 同 renderModalEditFields addField
   addFieldColumns: 2,
   addFieldLayout: 'horizontal',
   editFieldColumns: 4,
   // 查询方法，将在表格进行查询行为时触发，将获得查询区域的 form + 分页相关数据，需要返回 { success, data, total } 格式数据
   onQuery: async (params, extraParams) => {
     const { page, pageSize } = params
     console.log('onQuery', params, extraParams)
     await delay(1000)
 
     const data = mockData.slice((page - 1) * pageSize, page * pageSize)
 
     return {
       success: true,
       data,
       total: mockData?.length,
     }
   },
   // 新增方法，将在新增表单填写完毕，点击确认后触发，获得表单数据
   onAdd: async params => {
     console.log('add', params)

     await delay(1000)
 
     return {
       success: true,
     }
   },
   // 编辑方法，将在编辑表单填写完毕，点击确认后触发，获得表单数据
   onEdit: async (params, item) => {
     console.log('edit', params, item)

     const targetIndex = mockData.findIndex(data => data.id === item.id)
     const target = mockData[targetIndex]

     Object.assign(target, params) // 模拟数据变更
     console.log('更新后的数据', target, mockData[targetIndex])

     await delay(1000)
 
     return {
       success: true,
     }
   },
   // 详情查询方法，将在编辑按钮、查看详情按钮点击时触发，获得点击的 item，返回的 data 将作为编辑表单的初始数据
   onView: async item => {
     await delay(500)
 
     return {
       success: true,
       data: {
         ...item,
       },
     }
   },
   // 删除方法，将在删除/批量删除点击时触发，获得需要删除的 item，可能为多个
   onDelete: async target => {
     if (Array.isArray(target)) {
       message.info('删除多个')

       await delay(1000)

       return {
         success: true,
       }
     }
 
     message.info('删除单个')

     await delay(1000)

     return {
       success: true,
     }
   },
   // 国际化配置
   locale: {
    //  table: {
    //    totalDataCount: count => \`有 \${count} 条数据哦\`,
    //  },
     // actions: {
     //   multipleDeleteConfirm: count => \`\${count} 条数据都删掉吗？确定吗？一共删 \${count} 条哦！\`,
     // },
     // editField: {
     //   add: <a>{'Add'}</a>,
     // },
     // queryField: {
     //   query: '查~',
     //   more: '展开看看',
     // },
     // valueType: {
     //   inputContent: '写点啥？',
     // },
   },
 }
 
 return props
 `

function useDefaultCode() {
  return defaultCode
}

function getMockData() {
  return Array(200)
    .fill('')
    .map((_, idx) => ({
      id: `key_${idx + 1}`,
      ...Object.assign(
        {},
        ...Array(20)
          .fill('')
          .map((_, idx) => ({
            [`value${idx}`]: run(() => {
              const valueType = getMockDataType(idx)

              const dataMap = {
                date: dayjs()
                  .add(random(0, 10), 'day')
                  .valueOf(),
                dateRange: [
                  dayjs()
                    .add(random(0, 10), 'day')
                    .valueOf(),
                  dayjs()
                    .add(random(0, 10), 'day')
                    .valueOf(),
                ].sort((prev, next) => (prev > next ? -1 : 1)),
                select: sample([1, 2]),
                multipleSelect: [...new Set([1, 2])],
                text: random(0, 999999999999999),
              }

              // 随机数据破缺
              if (random(0, 10) > 8) {
                return undefined
              }

              if (valueType in dataMap) {
                return dataMap[valueType]
              }

              return random(0, 999999999999999)
            }),
          })),
      ),
    }))
}

function getMockDataType(idx: number) {
  if (idx % 3 === 0) {
    return 'date'
  }

  if (idx % 4 === 0) {
    return 'dateRange'
  }

  if (idx % 2 === 0) {
    return 'multipleSelect'
  }

  if (idx % 5 === 0) {
    return 'select'
  }

  return 'text'
}

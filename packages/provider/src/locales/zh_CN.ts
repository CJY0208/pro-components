import antdLocale from 'antd/es/locale/zh_CN'

export default {
  antdLocale,
  table: {
    actions: {
      multipleDeleteConfirm: (count: any = 0) => `确定删除已选中的 ${count} 条数据吗？`,
      multipleDelete: '批量删除',
      deleteConfirm: '确定删除吗？',
      delete: '删除',
      refreshTip: '刷新表格',
    },
    editField: {
      add: '新增',
      details: '详情',
      edit: '编辑',
      saveTips: '未保存的数据将会丢失，确定吗？',
    },
    queryField: {
      query: '查询',
      reset: '重置',
      fold: '收起',
      more: '更多',
    },
    modal: {
      confirm: '确认',
      okText: '好的',
      cancelText: '取消',
    },
    table: {
      selectionTips: (count: any = 0) => `已选择 ${count} 项`,
      deselect: '取消选择',
      inverse: '反向选择',
      action: '操作',
      totalDataCount: (total: any = 0) => `总共 ${total} 条数据`,
      edit: '编辑',
      save: '保存',
      cancel: '取消',
      cancelConfirm: '确认取消吗？',
      density: '表格密度',
      densityLarger: '宽松',
      densityMiddle: '正常',
      densitySmall: '紧凑',
      index: '序号',
    },
    valueType: {
      inputPassword: '输入密码',
      inputContent: '输入内容',
      chooseContent: '选择内容',
      startTime: '开始时间',
      endTime: '结束时间',
    },
  },
}

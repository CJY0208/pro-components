import antdLocale from 'antd/es/locale/en_US'

export default {
  antdLocale,
  table: {
    actions: {
      multipleDeleteConfirm: (count: any = 0) => `Are you sure to delete the selected ${count} data`,
      multipleDelete: 'Batch delete',
      deleteConfirm: 'Are you sure to delete?',
      delete: 'Delete',
      refreshTip: 'Refresh table',
    },
    editField: {
      add: 'Add',
      details: 'Details',
      edit: 'Edit',
      saveTips: 'Unsaved data will be lost, are you sure?',
    },
    queryField: {
      query: 'Query',
      reset: 'Reset',
      fold: 'Fold',
      more: 'More',
    },
    modal: {
      confirm: 'Ok',
      okText: 'Ok',
      cancelText: 'Cancel',
    },
    table: {
      selectionTips: (count: any = 0) => `${count} item${count > 1 ? 's' : ''} selected`,
      deselect: 'Deselect',
      inverse: 'Reverse selection',
      action: 'Action',
      totalDataCount: (total: any = 0) => `${total} in total`,
      edit: 'Edit',
      save: 'Save',
      cancel: 'Cancel',
      cancelConfirm: 'Are you sure to cancel?',
      density: 'Table density',
      densityLarger: 'Larger',
      densityMiddle: 'Middle',
      densitySmall: 'Small',
      idnex: 'Index',
    },
    valueType: {
      inputPassword: 'Input password',
      inputContent: 'Input content',
      chooseContent: 'Select content',
      startTime: 'Start time',
      endTime: 'End time',
    },
  },
}

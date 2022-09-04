import { ReactNode, Ref } from 'react'
import {
  TableProps,
  FormItemProps,
  TableColumnType,
  ButtonProps,
  PopconfirmProps,
  TooltipProps,
  FormProps,
  SwitchProps,
  FormInstance,
  TagProps,
  BadgeProps,
  ModalProps,
  SelectProps,
  RowProps,
} from 'antd'
import { Options as UseRequestOptions, Result as UseRequestResult } from 'ahooks/es/useRequest/src/types'
import {
  ProFieldValueFieldType,
  ProFieldOptionType,
  ProFormRenderParams,
  ProFieldItemProps,
  ProFieldValueTypes,
} from '@cjy0208/pro-form'
import { DrawerProps, TooltipConfig, ShowModalConfig } from '@cjy0208/pro-utils'

import editField from './plugins/editField'
import queryField from './plugins/queryField'
import table from './plugins/table'
import valueType from './plugins/valueType'
import actions from './plugins/actions'
import config from './plugins/config'
import modal from './plugins/modal'

export type ProTableLocaleValue = string | ReactNode | ((...args: any[]) => string | ReactNode)

export interface ProTableResponse<T = any> {
  success: boolean
  data?: T
  message?: any
  // [key: string]: any
}

export interface ProTableQueryFieldType extends ProFieldValueFieldType {
  hook?: (params: {
    form: FormInstance
  }) => Omit<ProTableQueryFieldType, 'hook'> | void | undefined | null | boolean | ReactNode
}

export interface ProTableTableButtonActionType extends Omit<ButtonProps, 'children'> {
  builtIn?: string
  content?: ButtonProps['children']
  confirm?: string | PopconfirmProps
  tooltip?: TooltipConfig
  actionType?: 'button'
}

export type ProTableEditFieldMode = 'view' | 'add' | 'edit'

export interface ProTableEditFieldParams<R = any> {
  item: R | undefined
  form: FormInstance
  mode: ProTableEditFieldMode
}

export interface ProTableEditFieldType<R = any> extends Omit<ProFieldValueFieldType, 'hook'> {
  readonly?: boolean
  hook?: (
    params: ProTableEditFieldParams<R>,
  ) => Omit<ProTableEditFieldType, 'hook' | 'name'> | void | undefined | null | boolean | ReactNode
}

export interface ProTableColumnType<R = any> extends TableColumnType<R> {
  valueType?: ProFieldValueFieldType['type']
  valueEnum?: ProFieldValueFieldType['options']
  editField?: boolean | ProTableEditFieldType | ProTableEditFieldType['hook']
  addField?: boolean | ProTableEditFieldType | ProTableEditFieldType['hook']
  viewField?: boolean | ProTableEditFieldType | ProTableEditFieldType['hook']
  queryField?: boolean | ProTableQueryFieldType | ProTableQueryFieldType['hook']
  tooltip?: TooltipConfig
  format?: string
  copyable?: boolean | Pick<ProTableTableButtonActionType, 'tooltip' | 'confirm'>
  hidden?: boolean
}

export interface ProTableTableSwitchActionType extends SwitchProps {
  builtIn?: string
  confirm?: string | PopconfirmProps
  tooltip?: TooltipConfig
  actionType?: 'switch'
}

export type ProTableTableActionType =
  | string
  | ProTableTableButtonActionType
  | ReactNode
  | ((...args: any[]) => string | ProTableTableButtonActionType | ReactNode)

export type ProTableBuiltInActionType = ReactNode | ((...args: any[]) => ReactNode)

export interface ProTableBuiltInPlugins {
  editField: ReturnType<typeof editField>
  queryField: ReturnType<typeof queryField>
  table: ReturnType<typeof table>
  valueType: ReturnType<typeof valueType>
  actions: ReturnType<typeof actions>
  config: ReturnType<typeof config>
  modal: ReturnType<typeof modal>
}

export interface ProTableEditFieldsConfig {
  isAvailable: boolean
  fields: ProTableEditFieldType[]
}
export interface ProTableEditFieldRenderParams extends ProFormRenderParams<ProTableEditFieldType> {
  fieldsMap: Record<string, ProTableEditFieldType>
  fieldsConfig: ProTableEditFieldsConfig
  getField: (fieldName: string) => ProTableEditFieldType | undefined
  renderDescriptions: () => ReactNode
  // renderField: (fieldName: string, ...args: any[]) => ReactNode
  // renderFields: (fields?: any[], ...args: any[]) => ReactNode
  // form: FormInstance
  item?: Record<string, any>
  mode: ProTableEditFieldMode
}

export interface ProTableQueryFieldRenderParams extends ProFormRenderParams<ProTableQueryFieldType> {
  // renderField: (field: string | ProTableQueryFieldType) => ReactNode
  // renderFields: (
  //   fields: (string | ProTableQueryFieldType | ReactNode)[] | (string | ProTableQueryFieldType | ReactNode)[][],
  // ) => ReactNode
  rawActions: ReactNode
  actions: ReactNode
  fold: ReactNode
  query: ReactNode
  reset: ReactNode
  // form: FormInstance
  showMore: boolean
}

export interface ProTableEditFieldModalProps extends Omit<ShowModalConfig, 'content'> {
  // greyBody?: boolean
  // draggable?: boolean
  // fullscreenable?: boolean
  // defaultFullscreen?: boolean
}

export interface ProTableEditFieldModalProps extends DrawerProps {
  drawer?: boolean
}

export interface ProTableProps<R = any> extends Omit<TableProps<R>, 'title' | 'locale'> {
  pure?: boolean

  // Pick<TableProps<R>, 'rowKey' | 'rowSelection' | 'indentSize'> {
  title?: string | ReactNode
  ref?: Ref<any>

  /** 是否固定动作栏到右侧 */
  fixColumnActions?: boolean
  tableExtraRender?: () => ReactNode
  tableEditable?: boolean

  /** 是否迷你模式 */
  mini?: boolean

  /** 是否模拟吸底滚动（横向） */
  fakeStickyScrollBar?: boolean
  defaultSize?: TableProps<R>['size']
  defaultTableSize?: TableProps<R>['size']

  showDataSourceIndex?: boolean
  dataSourceIndexCalcWithPage?: boolean
  dataSourceIndexColumnConfig?: ProTableColumnType<R>

  /** 可选择表格 */
  selectable?: boolean

  pagination?: TableProps<R>['pagination']

  /** 表格 icon 按钮动作，目前内置了刷新、列设置动作 */
  iconActions?: (
    | 'refresh'
    | 'table-size'
    | 'fullscreen'
    | Omit<ProTableTableActionType, 'refresh' | 'table-size' | 'fullscreen'>
  )[]

  /** 多选动作，目前内置了批量删除动作 */
  batchActions?: ProTableTableActionType[]

  /** 多选动作（废弃），目前内置了批量删除动作 */
  multipleActions?: ProTableTableActionType[]

  builtInActions?: {
    actions?: Record<string, ProTableBuiltInActionType>
    iconActions?: Record<string, ProTableBuiltInActionType>
    batchActions?: Record<string, ProTableBuiltInActionType>
    columnActions?: Record<string, ProTableBuiltInActionType>
  }

  /** 删 */
  onDelete?: <T = any>(target: R | R[]) => Promise<ProTableResponse<T>>

  /** 是否手动请求 */
  manualQuery?: boolean

  /** 是否隐藏查询表单 */
  hideQueryFields?: boolean

  /** 查询表单一行 N 个，默认值 3, */
  queryFieldColumns?: number
  queryFieldGutter?: RowProps['gutter']
  queryFieldLayout?: FormProps['layout']

  /** 查询表单默认展示前 N 行，默认值 1, */
  queryFieldDefaultLines?: number

  /** 查询表单默认展示前 N 个, 无默认值，如果使用此项将覆盖 queryFieldDefaultLines 行为 */
  queryFieldDefaultLength?: number

  /** 单独配置搜索表单，此项存在时，columns 内配置将失效 */
  queryFields?: ProTableQueryFieldType[] | ProTableQueryFieldType[][]

  /** 搜索表单项的排序 */
  queryFieldOrder?: string[]

  /** 是否序列化 field 值，例如 Moment -> timestamp */
  normalizeFieldValue?: boolean

  /** 是否回车键触发表单查询 */
  queryFieldTriggerOnEnter?: boolean

  /** 查询表单服务的配置，见 https://ahooks.js.org/zh-CN/hooks/use-request/basic#options */
  queryFieldServiceOptions?: UseRequestOptions<any, any>

  renderQueryFields?: (params: ProTableQueryFieldRenderParams) => ReactNode

  /** 初始分页参数 */
  initialPaginationParams?: { page?: number; pageSize?: number }
  /** 初始分页参数 */
  defaultPaginationParams?: { page?: number; pageSize?: number }
  defaultPageSize?: number

  editFieldModalProps?:
    | ProTableEditFieldModalProps
    | ((item: R, mode: ProTableEditFieldMode) => ProTableEditFieldModalProps)
  addFieldModalProps?:
    | ProTableEditFieldModalProps
    | ((item: R, mode: ProTableEditFieldMode) => ProTableEditFieldModalProps)
  viewFieldModalProps?:
    | ProTableEditFieldModalProps
    | ((item: R, mode: ProTableEditFieldMode) => ProTableEditFieldModalProps)

  editFieldGutter?: RowProps['gutter'] | ((item: R | undefined, mode: ProTableEditFieldMode) => RowProps['gutter'])
  viewFieldGutter?: RowProps['gutter']
  addFieldGutter?: RowProps['gutter']

  /** 单独配置新增表单，此项存在时，columns 内配置将失效 */
  addFields?: ProTableEditFieldType[] | ((item: undefined, mode: 'add') => ProTableEditFieldType[])
  addFieldLayout?: FormProps['layout']
  addFieldColumns?: number
  renderModalAddFields?: (renderParams: ProTableEditFieldRenderParams) => ReactNode

  /** 单独配置浏览区域，此项存在时，columns 内配置将失效 */
  viewFields?: ProTableEditFieldType[] | ((item: R, mode: 'view') => ProTableEditFieldType[])
  viewFieldLayout?: FormProps['layout']
  viewFieldColumns?: number
  renderModalViewFields?: (renderParams: ProTableEditFieldRenderParams) => ReactNode

  /** 单独配置编辑表单，此项存在时，columns 内配置将失效 */
  editFields?: ProTableEditFieldType[] | ((item: R | undefined, mode: ProTableEditFieldMode) => ProTableEditFieldType[])
  editFieldColumns?: number | ((item: R | undefined, mode: ProTableEditFieldMode) => number)
  editFieldLayout?: FormProps['layout'] | ((item: R | undefined, mode: ProTableEditFieldMode) => FormProps['layout'])
  renderModalEditFields?: (renderParams: ProTableEditFieldRenderParams) => ReactNode

  /** 表格按钮动作，目前内置了新增动作 */
  actions?: ('add' | Omit<ProTableTableActionType, 'add'>)[]
  columns?: ProTableColumnType<R>[]

  /** 表格项动作，目前内置了查看详情、编辑、删除动作 */
  columnActions?: (
    | 'view'
    | 'edit'
    | 'edit-icon'
    | 'table-edit'
    | Omit<ProTableTableActionType, 'view' | 'edit' | 'edit-icon' | 'table-edit'>
    | ProTableTableSwitchActionType
  )[]

  /** 表格项动作 column 的配置 */
  columnActionsConfig?: ProTableColumnType<R>

  /** 表格数据为空时隐藏所有的列，用在 columns 项较多但数据为空时，优化呈现效果 */
  hideColumnsWhenNoData?: boolean

  /** 查询动作 */
  onQuery?:
    | (<T = any>(params: any, extraParams: any) => Promise<ProTableResponse<R[]> | R[] | void>)
    | UseRequestResult<any, any>

  /** 详情 */
  onView?: <T = any>(item: R) => Promise<ProTableResponse<T>>

  /** 增 */
  onAdd?: <T = any>(params: any) => Promise<ProTableResponse<any> | void> | void

  /** 改 */
  onEdit?: <T = any>(params: any, item: R) => Promise<ProTableResponse<any> | void> | void

  /** 编辑成功后刷新表格 */
  refreshAfterEdit?: boolean

  /** 新增成功后刷新表格 */
  refreshAfterAdd?: boolean

  queryWrapperStyle?: React.CSSProperties
  bodyStyle?: React.CSSProperties
  mainStyle?: React.CSSProperties
  toolbarStyle?: React.CSSProperties
  noBackgroundColor?: boolean

  /** 内置语言包 */
  locale?: TableProps<R>['locale'] & {
    table?: {
      selectionTips?: ProTableLocaleValue
      deselect?: ProTableLocaleValue
      inverse?: ProTableLocaleValue
      action?: ProTableLocaleValue
      totalDataCount?: ProTableLocaleValue
      edit?: ProTableLocaleValue
      save?: ProTableLocaleValue
      cancel?: ProTableLocaleValue
      cancelConfirm?: ProTableLocaleValue
      density?: ProTableLocaleValue
      densityLarger?: ProTableLocaleValue
      densityMiddle?: ProTableLocaleValue
      densitySmall?: ProTableLocaleValue
    }
    actions?: {
      multipleDeleteConfirm?: ProTableLocaleValue
      multipleDelete?: ProTableLocaleValue
      deleteConfirm?: ProTableLocaleValue
      delete?: ProTableLocaleValue
      refreshTip?: ProTableLocaleValue
    }
    queryField?: {
      query?: ProTableLocaleValue
      reset?: ProTableLocaleValue
      fold?: ProTableLocaleValue
      more?: ProTableLocaleValue
    }
    valueType?: {
      inputPassword?: ProTableLocaleValue
      inputContent?: ProTableLocaleValue
      chooseContent?: ProTableLocaleValue
      startTime?: ProTableLocaleValue
      endTime?: ProTableLocaleValue
    }
    editField?: {
      add?: ProTableLocaleValue
      details?: ProTableLocaleValue
      edit?: ProTableLocaleValue
    }
    modal?: {
      okText?: ProTableLocaleValue
      cancelText?: ProTableLocaleValue
    }
  }

  localeKey?: 'zh-CN' | 'zh_CN' | 'en-US' | 'en_US' | 'id-ID' | 'id_ID'

  /** 渲染控制函数 */
  render?: ({ queryField, tableExtra, table }: any) => JSX.Element
}

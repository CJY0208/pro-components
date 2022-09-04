import { ReactNode, Ref } from 'react'
import {
  TableProps,
  FormItemProps,
  TableColumnType,
  ButtonProps,
  PopconfirmProps,
  TooltipProps,
  FormProps,
  FormInstance,
  TagProps,
  BadgeProps,
  ColProps,
  ModalProps,
  SwitchProps,
  SelectProps,
  InputProps,
  InputNumberProps,
  DatePickerProps,
  TimePickerProps,
  TimeRangePickerProps,
  RadioGroupProps,
  TreeSelectProps,
  TransferProps,
  CascaderProps,
  CheckboxProps,
  RadioProps,
  RateProps,
} from 'antd'
import { CheckboxGroupProps } from 'antd/es/checkbox'
import { TextAreaProps } from 'antd/es/input/TextArea'
import { Options as UseRequestOptions, Result as UseRequestResult } from 'ahooks/es/useRequest/src/types'
import { ConfirmConfig, TooltipConfig } from '@cjy0208/pro-utils'

export type ProFieldValueTypes =
  | 'password'
  | 'money'
  | 'textarea'
  | 'date'
  | 'dateTime'
  | 'dateWeek'
  | 'dateMonth'
  | 'dateQuarter'
  | 'dateYear'
  | 'dateRange'
  | 'dateTimeRange'
  | 'time'
  | 'timeRange'
  | 'text'
  | 'input'
  | 'select'
  | 'multipleSelect'
  | 'treeSelect'
  | 'multipleTreeSelect'
  | 'checkbox'
  | 'rate'
  | 'radio'
  | 'radioButton'
  // | 'progress'
  // | 'percent'
  | 'digit'
  | 'number'
  // | 'second'
  // | 'avatar'
  // | 'code'
  | 'switch'
  // | 'fromNow'
  // | 'image'
  // | 'jsonCode'
  // | 'color'
  | 'cascader'
  | 'transfer'

export interface ProFieldItemProps extends FormItemProps {
  key?: any
}

export interface ProFieldValueFieldType extends Omit<ProFieldItemProps, 'required'> {
  mode?: 'view' | 'edit'
  value?: any
  tooltip?: TooltipConfig
  props?: // | Record<string, any>
  | SwitchProps
    | SelectProps
    | InputProps
    | InputNumberProps
    | DatePickerProps
    | TimePickerProps
    | TimeRangePickerProps
    | RadioGroupProps
    | TreeSelectProps
    | TransferProps<any>
    | CascaderProps<any>
    | RateProps
    | CheckboxGroupProps
    | TextAreaProps
  format?: string
  fieldItemProps?: ProFieldItemProps
  type?: ProFieldValueTypes
  options?: ProFieldOptionType[] | (() => Promise<ProFieldOptionType[]>) | UseRequestResult<any, any>
  renderField?: (renderParams: any) => ReactNode
  renderView?: (value: any, config: any) => ReactNode
  disabled?: boolean
  required?: boolean | string
  hook?: (
    ...args: any[]
  ) => Omit<ProFieldValueFieldType, 'hook' | 'name'> | void | undefined | null | boolean | ReactNode
  copyable?: boolean | ConfirmConfig | TooltipConfig
  placeholder?: any | any[]
  colSpan?: ColProps['span']
}

export type ProFieldOptionValueType = string | number | boolean

export interface ProFieldOptionType {
  title?: any
  description?: any
  label: string | ReactNode
  value: ProFieldOptionValueType
  disabled?: boolean
  tag?: TagProps['color'] | TagProps
  badge?: BadgeProps['status'] | BadgeProps['color'] | BadgeProps
  children?: ProFieldOptionType[]
}

// 'password'
// 'money'
// 'textarea'
// 'date'
// 'dateTime'
// 'dateWeek'
// 'dateMonth'
// 'dateQuarter'
// 'dateYear'
// 'dateRange'
// 'dateTimeRange'
// 'time'
// 'timeRange'
// 'text'
// 'select'
// 'multipleSelect'
// 'treeSelect'
// 'multipleTreeSelect'
// 'checkbox'
// 'rate'
// 'radio'
// 'radioButton'
// 'digit'
// 'switch'
// 'cascader'
// 'transfer'

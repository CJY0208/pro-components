/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useMemo, useState, Fragment } from 'react'
import {
  Spin,
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Select,
  Tag,
  Space,
  Badge,
  Radio,
  Checkbox,
  Cascader,
  Rate,
  Switch,
  // Tooltip,
  Transfer,
  TreeSelect,
  // Upload,
  InputProps,
  InputNumberProps,
  DatePickerProps,
  TimePickerProps,
  TimeRangePickerProps,
  SelectProps,
  RadioGroupProps,
  TreeSelectProps as AntdTreeSelectProps,
  TransferProps as AntdTransferProps,
  CascaderProps,
  SwitchProps,
  CheckboxProps,
  RateProps,
} from 'antd'
import { CheckboxGroupProps } from 'antd/es/checkbox'
import { useRequest } from 'ahooks'
import { Result } from 'ahooks/es/useRequest/src/types'
import {
  LoadingOutlined,
  CheckCircleOutlined,
  StopOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { run, isArray, isString, isObject, intersection, clamp, isNumber } from '@cjy0208/tools'
import moment from 'moment'
import dayjs from 'dayjs'
import dayjs_utc from 'dayjs/plugin/utc'
import dayjs_timezone from 'dayjs/plugin/timezone'
import dayjs_relativeTime from 'dayjs/plugin/relativeTime'
import { Tooltip } from '@cjy0208/pro-utils'

import { ProFieldOptionType } from './types'

dayjs.extend(dayjs_utc)
dayjs.extend(dayjs_timezone)
dayjs.extend(dayjs_relativeTime)

const formatDateValue = (dateValue: any, format: string = 'YYYY-MM-DD') => {
  if (!dateValue) {
    return '--'
  }

  const momentValue = toValidMomentValue(dateValue)

  if (!momentValue) {
    return '--'
  }

  const timestamp = momentValue.valueOf()

  return dayjs.tz(timestamp).format(format)
}

export function toValidMomentValue(value: any) {
  if (!value) {
    return undefined
  }

  // if (isString(value)) {
  //   // console.log(value)
  // }

  if (isString(value) && /^\d+$/.test(value)) {
    // eslint-disable-next-line no-param-reassign
    value = Number(value)
  }

  const momentValue = moment(value)
  if (momentValue.format() === 'Invalid date') {
    return undefined
  }

  return momentValue
}

export const normalizeMomentValue = (value: any, targetTime?: string) => {
  const timestamp = run(() => {
    if (run(moment, 'isMoment', value) ?? false) {
      return run(value, 'valueOf') ?? value
    }

    return run(value, 'valueOf') ?? value
  })

  if (isNumber(timestamp) && isString(targetTime)) {
    const momentValue = moment(timestamp)
    if (momentValue.format() === 'Invalid date') {
      return timestamp
    }
    return moment(momentValue.format(`YYYY-MM-DD ${targetTime}`)).valueOf()
  }

  return timestamp
}

function useRemoteOptions(optionConfigs: any) {
  const isRemote = !Array.isArray(optionConfigs)
  const insideService = useRequest<any, any>(
    async (...args: any[]) => {
      const response: any = await run(optionConfigs, undefined, ...args)

      if (Array.isArray(response)) {
        return response
      }

      const { success, data } = response ?? {}

      if (success) {
        return data
      }

      return []
    },
    {
      manual: !isRemote,
    },
  )
  const isService = useMemo(() => {
    if (!isObject(optionConfigs)) {
      return false
    }
    const serviceKeys = Object.keys(insideService)
    if (serviceKeys?.length === 0) {
      return false
    }
    // 取 keys 交集
    const matchKeys = intersection(serviceKeys, Object.keys(optionConfigs))

    // 判断 keys 重合度大于 50%，认为传入的是 service
    return matchKeys?.length / serviceKeys?.length >= 0.5
  }, [optionConfigs])

  const service = isService ? (optionConfigs as Result<any, any>) : insideService

  const options = !isRemote ? optionConfigs : service?.data ?? []

  return {
    service,
    options: isArray(options) ? options : [],
    loading: !isRemote ? false : service.loading,
    isRemote,
  }
}

export function RemoteOptionsView(props: any): any {
  const { loading, options: remoteOptions, isRemote } = useRemoteOptions(props?.options)
  const options = [...remoteOptions, ...(props.extraOptions ?? [])]

  if (isRemote && loading) {
    return <LoadingOutlined />
  }

  if (isArray(props?.value)) {
    const targets = props?.value.map((value: any) => options.find((item: any) => item?.value === value))

    if (targets?.length === 0) {
      return '--'
    }

    return (
      <Space wrap size={3}>
        {targets.map((target: any, idx: number) => (
          <Tag
            style={{ margin: 0 }}
            color={isString(target?.tag) ? target?.tag : undefined}
            {...(isObject(target?.tag) ? target?.tag : {})}
            key={idx}
          >
            {target?.label}
          </Tag>
        ))}
      </Space>
    )

    // if (options.some((item: any) => !!item?.tag)) {
    //   return (
    //     <Space wrap size={3}>
    //       {targets.map((target: any, idx: number) => (
    //         <Tag
    //           style={{ margin: 0 }}
    //           color={isString(target?.tag) ? target?.tag : undefined}
    //           {...(isObject(target?.tag) ? target?.tag : {})}
    //           key={idx}
    //         >
    //           {target?.label}
    //         </Tag>
    //       ))}
    //     </Space>
    //   )
    // }

    // return targets?.length > 0
    //   ? targets
    //       .map((target: any) => target?.label)
    //       .filter(Boolean)
    //       .join(', ')
    //   : '--'
  }

  const target = options.find((item: any) => item?.value === props?.value)

  if (!target?.label) {
    return '--'
  }

  if (target?.badge) {
    const isStatus = ['success', 'processing', 'default', 'error', 'warning'].includes(target?.badge)

    return (
      <Badge
        text={target?.label}
        status={isStatus ? target?.badge : undefined}
        color={!isStatus && isString(target?.badge) ? target?.badge : undefined}
        {...(isObject(target?.badge) ? target?.badge : {})}
      />
    )
  }

  return (
    <Tag
      style={{ margin: 0 }}
      color={isString(target?.tag) ? target?.tag : undefined}
      {...(isObject(target?.tag) ? target?.tag : {})}
    >
      {target?.label}
    </Tag>
  )
}

export function RemoteCascaderView(props: any) {
  const { loading, options, isRemote } = useRemoteOptions(props?.options)

  if (isRemote && loading) {
    return <LoadingOutlined />
  }

  if (!isArray(props?.value)) {
    return props?.value ?? '--'
  }

  return props?.value
    .reduce(
      ({ result, currentList }: any, item: any) => {
        const target = currentList.find((option: any) => option.value === item)

        if (target) {
          result.push(target?.label ?? target?.value)
          currentList = target?.children ?? []
        }

        return {
          result,
          currentList,
        }
      },
      {
        result: [],
        currentList: options,
      },
    )
    ?.result?.join(' / ')
}

export function RemoteSelect(props: SelectProps<any>) {
  const { loading, options } = useRemoteOptions(props?.options)

  return (
    <Select {...props} options={options!} loading={loading}>
      {(options ?? []).map((option: any) => (
        <Select.Option key={option?.value} value={option?.value}>
          {option?.label}
        </Select.Option>
      ))}
    </Select>
  )
}

export function RemoteCheckbox(props: CheckboxGroupProps) {
  const { loading, options } = useRemoteOptions(props?.options)

  if (loading) {
    return <LoadingOutlined />
  }

  return (
    <Checkbox.Group {...props} options={options!}>
      {(options ?? []).map((option: any) => (
        <Checkbox key={option?.value} value={option?.value}>
          {option?.label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  )
}

export function RemoteRadio(props: RadioGroupProps) {
  const { loading, options } = useRemoteOptions(props?.options)

  if (loading) {
    return <LoadingOutlined />
  }

  // console.log(props)

  // const RadioNode = (props as any)?.isButton ? Radio.Button : Radio

  return (
    <Radio.Group {...props} options={options!}>
      {/* {(options ?? []).map((option: any) => (
        <RadioNode key={option?.value} value={option?.value}>
          {option?.label}
        </RadioNode>
      ))} */}
    </Radio.Group>
  )
}

export interface TransferProps extends AntdTransferProps<any> {
  options?: ProFieldOptionType[]
}

export function RemoteTransfer({ options: propOptions, ...props }: TransferProps) {
  const { loading, options } = useRemoteOptions(propOptions)

  return (
    <Spin spinning={loading}>
      <Transfer
        showSearch
        render={item => item.label}
        targetKeys={(props as any)?.value}
        {...props}
        dataSource={options.map((item: any) => ({
          ...item,
          key: item?.value,
          // title: item?.label,
          // description: item?.label,
        }))}
      />
    </Spin>
  )
}

export interface TreeSelectProps extends AntdTreeSelectProps<any> {
  options?: ProFieldOptionType[]
}

const adaptTreeSelectItem = (options: any[]) =>
  options.map((item: any) => ({
    key: item?.value,
    id: item?.key ?? item?.value,
    title: item?.label,
    ...item,
    ...(item?.children
      ? {
          children: (adaptTreeSelectItem as any)(item.children),
        }
      : {}),
  }))

export function RemoteTreeSelect({ options: propOptions, ...props }: TreeSelectProps) {
  const { loading, options } = useRemoteOptions(propOptions)

  return (
    <TreeSelect
      placeholder="Select item"
      loading={loading}
      showSearch
      showArrow
      allowClear
      treeData={adaptTreeSelectItem(options)}
      {...props}
    />
  )
}

const normalizeTimeRangeFieldValue = (value: any) => {
  if (isArray(value)) {
    const [start, end] = value
    return [toValidMomentValue(start), toValidMomentValue(end)]
  }
  if (isString(value)) {
    const [start, end] = value.split('-')
    return [toValidMomentValue(start), toValidMomentValue(end)]
  }
  return [toValidMomentValue(value)]
}

const normalizeTimeRangeValue = (value: any) => {
  if (isArray(value)) {
    const [start, end] = value
    return [normalizeMomentValue(start), normalizeMomentValue(end)]
  }

  return value
}

const renderTimeRangeValue = (defaultFormat: string = 'YYYY-MM-DD') => (value: any, config: any = {}) => {
  const format = config?.format ?? defaultFormat

  const [start, end] = run(() => {
    if (isArray(value)) {
      return value
    }
    if (isString(value)) {
      return value.split('-')
    }

    return []
  })

  if ([start, end].filter(Boolean)?.length === 0) {
    return '--'
  }

  return (
    <>
      {[start, end].filter(Boolean).map((value, idx) => (
        <Fragment key={idx}>
          {idx > 0 && ' ~ '}
          {value ? <Tooltip config={run(dayjs.tz(value), 'fromNow')}>{formatDateValue(value, format)}</Tooltip> : '--'}
        </Fragment>
      ))}
    </>
  )
}

function PasswordView({ value }: any) {
  const [decrypted, setDecrypt] = useState(false)

  const Icon = decrypted ? EyeOutlined : EyeInvisibleOutlined

  return !value ? (
    <>--</>
  ) : (
    <span>
      {decrypted ? value : Array(clamp(String(value)?.length ?? 0, 0, 8)).fill('*')}
      <Icon style={{ marginLeft: 2, color: '#1890ff' }} onClick={() => setDecrypt(value => !value)} />
    </span>
  )
}

export const types = {
  // 密码输入框
  password: {
    renderField: ({ fieldProps: props = {} }: any = {}) => (
      <Input.Password placeholder="Input password" allowClear {...props} />
    ),
    renderView: (value: any) => <PasswordView value={value} />,
  },
  // 金额输入框
  money: {
    renderField: ({ fieldProps: props = {} }: any = {}) => (
      <InputNumber
        placeholder="Input number"
        prefix="￥"
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value!.replace(/\$\s?|(,*)/g, '')}
        {...props}
      />
    ),
    renderView: (value: any) => (value ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '--'),
  },
  // 文本域
  textarea: {
    renderField: ({ fieldProps: props = {} }: any = {}) => (
      <Input.TextArea placeholder="Input text" allowClear {...props} />
    ),
    renderView: (value: any) => value || '--',
  },
  // 日期
  date: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <DatePicker {...props} />,
    normalizeValue: (value: any) => normalizeMomentValue(value),
    normalizeFieldValue: (value: any) => toValidMomentValue(value),
    renderView: (value: any, config: any = {}) =>
      !value ? (
        '--'
      ) : (
        <Tooltip config={run(dayjs.tz(value), 'fromNow')}>
          {formatDateValue(value, config?.format ?? 'YYYY-MM-DD')}
        </Tooltip>
      ),
  },
  // 日期时间
  dateTime: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <DatePicker showTime {...props} />,
    normalizeValue: (value: any) => normalizeMomentValue(value),
    normalizeFieldValue: (value: any) => toValidMomentValue(value),
    renderView: (value: any, config: any = {}) =>
      !value ? (
        '--'
      ) : (
        <Tooltip config={run(dayjs.tz(value), 'fromNow')}>
          {formatDateValue(value, config?.format ?? 'YYYY-MM-DD HH:mm:ss')}
        </Tooltip>
      ),
  },
  // 周
  dateWeek: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <DatePicker.WeekPicker {...props} />,
    normalizeValue: (value: any) => normalizeMomentValue(value),
    normalizeFieldValue: (value: any) => toValidMomentValue(value),
    renderView: (value: any, config: any = {}) =>
      !value ? (
        '--'
      ) : (
        <Tooltip config={run(dayjs.tz(value), 'fromNow')}>
          {formatDateValue(value, config?.format ?? 'YYYY-wo')}
        </Tooltip>
      ),
  },
  // 月
  dateMonth: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <DatePicker.MonthPicker {...props} />,
    normalizeValue: (value: any) => normalizeMomentValue(value),
    normalizeFieldValue: (value: any) => toValidMomentValue(value),
    renderView: (value: any, config: any = {}) =>
      !value ? (
        '--'
      ) : (
        <Tooltip config={run(dayjs.tz(value), 'fromNow')}>
          {formatDateValue(value, config?.format ?? 'YYYY-MM')}
        </Tooltip>
      ),
  },
  // 季度输入
  dateQuarter: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <DatePicker.QuarterPicker {...props} />,
    normalizeValue: (value: any) => normalizeMomentValue(value),
    normalizeFieldValue: (value: any) => toValidMomentValue(value),
    renderView: (value: any, config: any = {}) =>
      !value ? (
        '--'
      ) : (
        <Tooltip config={run(dayjs.tz(value), 'fromNow')}>
          {formatDateValue(value, config?.format ?? 'YYYY-\\QQ')}
        </Tooltip>
      ),
  },
  // 年份输入
  dateYear: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <DatePicker.YearPicker {...props} />,
    normalizeValue: (value: any) => normalizeMomentValue(value),
    normalizeFieldValue: (value: any) => toValidMomentValue(value),
    renderView: (value: any, config: any = {}) =>
      !value ? (
        '--'
      ) : (
        <Tooltip config={run(dayjs.tz(value), 'fromNow')}>{formatDateValue(value, config?.format ?? 'YYYY')}</Tooltip>
      ),
  },
  // 日期区间
  dateRange: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <DatePicker.RangePicker {...props} />,
    normalizeValue: (value: any) => {
      if (isArray(value)) {
        const [start, end] = value
        return [normalizeMomentValue(start, '00:00:00'), normalizeMomentValue(end, '23:59:59')]
      }

      return value
    },
    normalizeFieldValue: normalizeTimeRangeFieldValue,
    renderView: renderTimeRangeValue(),
  },
  // 日期时间区间
  dateTimeRange: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <DatePicker.RangePicker showTime {...props} />,
    normalizeValue: normalizeTimeRangeValue,
    normalizeFieldValue: normalizeTimeRangeFieldValue,
    renderView: renderTimeRangeValue('YYYY-MM-DD HH:mm:ss'),
  },
  // 时间
  time: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <TimePicker {...props} />,
    normalizeValue: (value: any) => value,
    normalizeFieldValue: (value: any) => toValidMomentValue(value),
    renderView: (value: any, config: any = {}) =>
      !value ? (
        '--'
      ) : (
        <Tooltip config={run(dayjs.tz(value), 'fromNow')}>
          {formatDateValue(value, config?.format ?? 'HH:mm:ss')}
        </Tooltip>
      ),
  },
  // 时间区间
  timeRange: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <TimePicker.RangePicker {...props} />,
    renderView: renderTimeRangeValue('HH:mm:ss'),
    normalizeValue: normalizeTimeRangeValue,
    normalizeFieldValue: normalizeTimeRangeFieldValue,
  },
  // 文本框
  text: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <Input placeholder="Input text" allowClear {...props} />,
    renderView: (value: any) => value || '--',
  },
  input: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <Input placeholder="Input text" allowClear {...props} />,
    renderView: (value: any) => value || '--',
  },
  // 下拉框
  select: {
    renderField: ({ fieldProps: props = {} }: any = {}) => (
      <RemoteSelect placeholder="Select item" showSearch showArrow optionFilterProp="label" allowClear {...props} />
    ),
    renderView: (value: any, config: any = {}) => (
      <RemoteOptionsView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
  // 下拉框
  multipleSelect: {
    renderField: ({ fieldProps: props = {} }: any = {}) => (
      <RemoteSelect
        placeholder="Select item"
        allowClear
        showSearch
        showArrow
        optionFilterProp="label"
        mode="multiple"
        {...props}
      />
    ),
    renderView: (value: any, config: any = {}) => (
      <RemoteOptionsView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
  // 树形下拉框
  treeSelect: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <RemoteTreeSelect {...props} />,
    renderView: (value: any, config: any = {}) => (
      <RemoteOptionsView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
  // 树形下拉框
  multipleTreeSelect: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <RemoteTreeSelect treeCheckable {...props} multiple />,
    renderView: (value: any, config: any = {}) => (
      <RemoteOptionsView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
  // 多选框
  checkbox: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <RemoteCheckbox {...props} />,
    renderView: (value: any, config: any = {}) => (
      <RemoteOptionsView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
  // 星级组件
  rate: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <Rate allowHalf allowClear {...props} />,
    renderView: (value: any, config: any = {}) => <Rate {...config} disabled value={value} />,
  },
  // 单选框
  radio: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <RemoteRadio {...props} />,
    renderView: (value: any, config: any = {}) => (
      <RemoteOptionsView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
  // 按钮单选框
  radioButton: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <RemoteRadio {...props} optionType="button" />,
    renderView: (value: any, config: any = {}) => (
      <RemoteOptionsView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
  // 进度条
  // progress: {
  //   renderField: () => null,
  // },
  // 百分比组件
  // percent: {
  //   renderField: () => null,
  // },
  // 数字输入框
  digit: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <InputNumber placeholder="Input number" {...props} />,
    renderView: (value: any) => (value ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '--'),
  },
  number: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <InputNumber placeholder="Input number" {...props} />,
    renderView: (value: any) => (value ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '--'),
  },
  // 秒格式化
  // second: {
  //   renderField: () => null,
  // },
  // 头像
  // avatar: {
  //   renderField: () => null,
  // },
  // 代码框
  // code: {
  //   renderField: () => null,
  // },
  // 开关
  switch: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <Switch {...props} />,
    renderView: (value: any, config: any = {}) => (
      <Switch checked={value} {...config} disabled />
      // <RemoteOptionsView
      //   {...config}
      //   options={config?.valueEnum ?? config?.options}
      //   extraOptions={[
      //     { label: <CheckCircleOutlined style={{ color: '#52c41a', fontSize: 20 }} />, value: 'true' },
      //     { label: <StopOutlined style={{ color: '#ff4d4f', fontSize: 20 }} />, value: 'false' },
      //   ]}
      //   value={String(!!value)}
      // />
    ),
  },
  // 相对于当前时间
  // fromNow: {
  //   renderField: () => null,
  // },
  // 图片
  // image: {
  //   renderField: () => null,
  // },
  // 代码框，但是带了 json 格式化
  // jsonCode: {
  //   renderField: () => null,
  // },
  // 颜色选择器
  // color: {
  //   renderField: () => null,
  // },
  // 级联选择器
  cascader: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <Cascader placeholder="Select item" {...props} />,
    renderView: (value: any, config: any = {}) => (
      <RemoteCascaderView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
  transfer: {
    renderField: ({ fieldProps: props = {} }: any = {}) => <RemoteTransfer {...props} />,
    renderView: (value: any, config: any = {}) => (
      <RemoteOptionsView {...config} options={config?.valueEnum ?? config?.options} value={value} />
    ),
  },
}

export default Object.fromEntries(
  Object.entries(types).map(([key, value]) => [
    key,
    {
      renderField: ({ fieldProps: props = {} }: any = {}) => <Input placeholder="Input text" allowClear {...props} />,
      normalizeValue: (value: any) => value,
      normalizeFieldValue: (value: any) => value,
      renderView: (value: any, config: any = {}) => value ?? '--',
      ...(value as any),
    },
  ]),
) as typeof types

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef, useEffect, useMemo, memo, useState, isValidElement } from 'react'
import { Form, Space, TablePaginationConfig } from 'antd'
import { isFunction, classnames, run, isString, delay, isArray, flatten, isObject, intersection } from '@cjy0208/tools'
import { DownOutlined, UpOutlined, SyncOutlined, SearchOutlined } from '@ant-design/icons'
import { useSetState as useAhooksSetState, useRequest, useToggle, useGetState, useMemoizedFn } from 'ahooks'
import { Result } from 'ahooks/es/useRequest/src/types'
import { useMount, useThrottleFn } from 'ahooks'
import { Button, catchPromise } from '@cjy0208/pro-utils'
import { ProForm, ProFieldValueTypes, FormItem } from '@cjy0208/pro-form'

import Action from '../actions/Action'
import useValueTypePlugin, { getFieldFromColumn } from '../valueType'
import useConfigPlugin, { I18nText } from '../config'
import { useProps, createPlugin } from '../../utils'

import { ProTableProps, ProTableQueryFieldType, ProTableQueryFieldRenderParams } from '../../types'

const useSetState = useAhooksSetState as typeof useState

export function simpleCeil(num: number, base: number) {
  return base * Math.ceil(num / base)
}

function useQueryFields() {
  const props = useProps()
  const { columns = [], queryFields: propsQueryFields } = props
  const columnQueryFields = useMemo(
    () =>
      columns
        .map((col: any) => {
          if (!col?.queryField) {
            return undefined
          }

          return getFieldFromColumn(col, 'queryField')
        })
        .filter(Boolean),
    [columns],
  )

  const rawQueryFields = propsQueryFields ?? columnQueryFields

  const queryFields = flatten<ProTableQueryFieldType>(rawQueryFields)

  const queryFieldsMap = useMemo<Record<string, ProTableQueryFieldType>>(
    () =>
      Object.assign(
        {},
        ...queryFields.map((field: ProTableQueryFieldType) => {
          return {
            [String(field?.name)]: field,
          }
        }),
      ),
    [queryFields],
  )

  return { rawQueryFields, queryFields, queryFieldsMap }
}

const QueryButton = memo(function QueryButton(props) {
  const {
    service,
    form,
    paginationParams,
    setPaginationParams,
    setSelectedItems,
  } = useQueryFieldPlugin(({ loading }) => [loading])

  const query = useThrottleFn(
    async () => {
      const values = await form.validateFields()
      setPaginationParams({ page: 1 })
      setSelectedItems([])
      await delay(100)
      service.run({
        ...values,
        ...paginationParams,
        page: 1,
      })
    },
    {
      wait: 300,
    },
  )

  return (
    <Action icon={<SearchOutlined />} loading={service.loading} type="primary" onClick={query.run} {...props}>
      <I18nText text="queryField.query" />
    </Action>
  )
})

const QueryFieldForm = memo(function QueryFieldForm({ form, onEnterDown, proFormRef }: any) {
  const props = useProps<ProTableProps>()
  const formStatusRef = useRef({
    focused: false,
  })
  const {
    queryFieldGutter,
    queryFieldColumns = 3,
    queryFieldDefaultLength: propsQueryFieldDefaultLength,
    queryFieldDefaultLines = 1,
    queryFieldLayout = 'vertical',
    queryFieldOrder = [],
    renderQueryFields,
    normalizeFieldValue,
  } = props
  const [showMoreQueryForm, { toggle: toggleShowMoreQueryForm }] = useToggle()
  const { rawQueryFields, queryFieldsMap: fieldsMap } = useQueryFields()

  const foldAction = (
    <Action
      type="link"
      size="small"
      icon={showMoreQueryForm ? <UpOutlined /> : <DownOutlined />}
      onClick={() => toggleShowMoreQueryForm()}
    >
      <I18nText text={showMoreQueryForm ? 'queryField.fold' : 'queryField.more'} />
    </Action>
  )
  const queryAction = <QueryButton />
  const resetAction = (
    <Action
      icon={<SyncOutlined />}
      onClick={() => {
        form.resetFields()
      }}
    >
      <I18nText text="queryField.reset" />
    </Action>
  )
  const rawActions = (
    <Space className="f-pro-table-query-form-actions">
      {queryAction}
      {resetAction}
    </Space>
  )
  const actions = (
    <FormItem key="actions" label={queryFieldLayout === 'vertical' ? ' ' : null}>
      <Space className="f-pro-table-query-form-actions">{rawActions}</Space>
    </FormItem>
  )

  const defaultRenderQueryFields = ({ renderField, renderFields }: any) => {
    if (isArray(rawQueryFields?.[0])) {
      const defaultShowQueryFields = rawQueryFields.slice(0, queryFieldDefaultLines)
      const showingFields = showMoreQueryForm ? rawQueryFields : defaultShowQueryFields

      return renderFields([
        ...showingFields,
        [
          <FormItem key="actions" label={null}>
            <Space className="f-pro-table-query-form-actions">
              {defaultShowQueryFields?.length < rawQueryFields?.length && foldAction}
              {queryAction}
              {resetAction}
            </Space>
          </FormItem>,
        ],
      ])
    }

    const unsortedKeys = Object.keys(fieldsMap).filter(key => !queryFieldOrder.includes(key))

    const queryFields = [
      ...queryFieldOrder.map((key: string) => fieldsMap?.[key]),
      ...unsortedKeys.map((key: string) => fieldsMap?.[key]),
    ]

    const queryFieldDefaultLength = propsQueryFieldDefaultLength ?? queryFieldColumns * queryFieldDefaultLines - 1
    const defaultShowQueryFields = queryFields.slice(0, queryFieldDefaultLength)
    const showingFields = showMoreQueryForm ? queryFields : defaultShowQueryFields

    return renderFields([
      ...showingFields,
      ...Array(simpleCeil(showingFields?.length + 1, queryFieldColumns) - showingFields?.length - 1)
        .fill('')
        .map((_, idx) => <div key={idx} />),
      <FormItem
        key="action"
        label={queryFieldLayout === 'vertical' && showingFields?.length % queryFieldColumns !== 0 ? ' ' : null}
      >
        <Space className="f-pro-table-query-form-actions">
          {defaultShowQueryFields?.length < queryFields?.length && foldAction}
          {queryAction}
          {resetAction}
        </Space>
      </FormItem>,
    ])
  }

  return (
    <ProForm
      ref={proFormRef}
      form={form}
      fields={rawQueryFields}
      layout={queryFieldLayout}
      gridColumns={queryFieldColumns}
      gridGutter={queryFieldGutter}
      normalizeFieldValue={normalizeFieldValue}
      className="f-pro-table-grid-field"
      onFocus={() => {
        formStatusRef.current.focused = true
      }}
      onBlur={() => {
        formStatusRef.current.focused = false
      }}
      onKeyDown={e => {
        if (formStatusRef.current.focused && e.nativeEvent.keyCode === 13) {
          run(onEnterDown)
          return
        }
      }}
      render={({ renderField, renderFields }) =>
        run(renderQueryFields ?? defaultRenderQueryFields, undefined, {
          renderField,
          renderFields,
          rawActions,
          actions,
          fold: foldAction,
          query: queryAction,
          reset: resetAction,
          form,
          showMore: showMoreQueryForm,
        })
      }
    />
  )
})

export const useQueryFieldPlugin = createPlugin((props: ProTableProps) => {
  const { types } = useValueTypePlugin(() => [])
  const {
    pure = false,
    queryWrapperStyle = pure ? { padding: 0 } : {},
    queryFieldTriggerOnEnter = true,
    onQuery,
    pagination,
    defaultPaginationParams = {},
    initialPaginationParams = {},
    queryFieldLayout = 'vertical',
    defaultPageSize = 10,
    queryFieldServiceOptions = {},
    manualQuery,
    normalizeFieldValue = true,
    rowSelection,
    rowKey = 'id',
    dataSource: propDataSource,
  } = props
  const [form] = Form.useForm()
  const [selectedItems, setSelectedItems, getSelectedItems] = useGetState<any[]>([])
  const [paginationParams, setPaginationParams] = useSetState<{ page?: number; pageSize?: number; [key: string]: any }>(
    {
      page: (pagination as TablePaginationConfig)?.defaultCurrent ?? 1,
      pageSize: (pagination as TablePaginationConfig)?.defaultPageSize ?? defaultPageSize,
      ...initialPaginationParams,
      ...defaultPaginationParams,
    },
  )

  const [extraParams, setExtraParams] = useSetState<{ filters?: any; sorters?: any; [key: string]: any }>({
    filters: {},
    sorters: {},
  })

  const extraParamsRef = useRef(extraParams)
  extraParamsRef.current = extraParams
  const getExtraParams = useMemoizedFn(() => extraParamsRef.current)

  const paginationParamsRef = useRef(paginationParams)
  paginationParamsRef.current = paginationParams
  const getPaginationParams = useMemoizedFn(() => paginationParamsRef.current)

  const { queryFields } = useQueryFields()
  const hasQueryFields = queryFields?.length > 0

  const queryingParamsRef = useRef<Record<string, any>>({})
  const getQueryingParams = useMemoizedFn(() => ({ ...queryingParamsRef.current }))
  const queryingExtraParamsRef = useRef<Record<string, any>>({})
  const getQueryingExtraParams = useMemoizedFn(() => ({ ...queryingExtraParamsRef.current }))
  const proFormRef = useRef<any>(null)
  const innerService = useRequest(
    async (params = {}, extra = {}) => {
      const fieldsMapRef = proFormRef?.current?.fieldsMapRef
      const currentParams = {
        ...Object.fromEntries(
          Object.entries({
            ...(form.getFieldsValue() ?? {}),
            ...params,
          }).map(([key, value]) => [
            key,
            !normalizeFieldValue
              ? value
              : run(
                  types?.[fieldsMapRef?.current[key]?.current?.type as ProFieldValueTypes],
                  'normalizeValue',
                  value,
                ) ?? value,
          ]),
        ),
        ...(getPaginationParams() ?? paginationParams),
      }
      const currentExtraParams = {
        ...(getExtraParams() ?? extraParams),
        ...extra,
      }

      queryingParamsRef.current = { ...currentParams }
      queryingExtraParamsRef.current = { ...currentExtraParams }

      const response = await run<any>(onQuery, undefined, currentParams, currentExtraParams)

      return {
        success: response?.success ?? true,
        data: isArray(response?.data) ? response?.data : [],
        total: response?.total,
      }
    },
    {
      manual: true,
      throttleWait: 500,
      debounceWait: 32,
      debounceMaxWait: 1000,
      // loadingDelay: 300,
      // refreshOnWindowFocus: true, // 离屏重新请求
      ...queryFieldServiceOptions,
    },
  )

  const onQueryIsService = useMemo(() => {
    if (!isObject(onQuery)) {
      return false
    }
    const serviceKeys = Object.keys(innerService)
    if (serviceKeys?.length === 0) {
      return false
    }
    // 取 keys 交集
    const matchKeys = intersection(serviceKeys, Object.keys(onQuery as any))

    // 判断 keys 重合度大于 50%，认为传入的是 service
    return matchKeys?.length / serviceKeys?.length >= 0.5
  }, [])

  const queryService: Result<any, any> = onQueryIsService ? onQuery : (innerService as any)

  const search = useMemoizedFn(async (params: any = {}) => {
    const [error] = await catchPromise(form.validateFields())

    setSelectedItems([])
    if (error) {
      queryService.mutate({
        success: false,
        data: [],
        total: 0,
      })
      return
    }

    await queryService.runAsync({
      ...(form.getFieldsValue() ?? {}),
      ...paginationParams,
      ...params,
    })
  })

  const dataSource = propDataSource ?? queryService?.data?.data ?? []
  const getDataSource = useMemoizedFn(() => dataSource)

  const refresh = useMemoizedFn((params: any = {}) =>
    search({
      ...(form.getFieldsValue() ?? {}),
      ...paginationParams,
      ...params,
    }),
  )

  useEffect(() => {
    if (!manualQuery) {
      refresh().then(() => {
        const defaultSelectedRowKeys = rowSelection!?.defaultSelectedRowKeys ?? []
        if (defaultSelectedRowKeys!?.length > 0) {
          const currentDataSource = getDataSource()
          setSelectedItems(
            currentDataSource.filter((item: any) => {
              const key = item?.[String(run<string>(rowKey, undefined, item))]

              return defaultSelectedRowKeys.includes(key)
            }),
          )
        }
      })
    }
  }, [manualQuery])

  const render = () => (
    <div
      className={classnames('f-pro-table-query', {
        'f-pro-table-query-horizontal': queryFieldLayout === 'horizontal',
        'f-pro-table-query-bordered': !pure,
      })}
      style={queryWrapperStyle}
    >
      <QueryFieldForm
        form={form}
        proFormRef={proFormRef}
        // 聚焦状态下，回车键时刷新
        onEnterDown={async () => {
          if (!queryFieldTriggerOnEnter) {
            return
          }
          setPaginationParams({ page: 1 })
          await delay(100)
          refresh({
            page: 1,
          })
        }}
      />
    </div>
  )

  return useMemo(
    () => ({
      hasQueryFields,
      form,
      render,
      service: queryService,
      loading: queryService.loading,
      dataSource,
      paginationParams,
      setPaginationParams,
      getPaginationParams,
      selectedItems,
      setSelectedItems,
      getSelectedItems,
      getQueryingParams,
      getQueryingExtraParams,
      refresh,
      search,
      setExtraParams,
    }),
    [
      hasQueryFields,
      form,
      render,
      queryService,
      queryService.loading,
      dataSource,
      paginationParams,
      setPaginationParams,
      getPaginationParams,
      selectedItems,
      setSelectedItems,
      getSelectedItems,
      getQueryingParams,
      getQueryingExtraParams,
      setExtraParams,
    ],
  )
}, 'queryField')
export default useQueryFieldPlugin

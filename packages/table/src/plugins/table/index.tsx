/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { memo, forwardRef, useMemo, useImperativeHandle, useRef, useState, useEffect } from 'react'
import { Table as AntdTable, TableProps, Space, Alert, Form, FormInstance, message, Dropdown, Menu, Select } from 'antd'
import {
  ColumnHeightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import { isExist, run, isObject, delay, set, isArray, isFunction, classnames } from '@cjy0208/tools'
import { catchPromise, Button, Action, Tooltip, Hook, EllipsisTooltip } from '@cjy0208/pro-utils'
import { ProFieldValueFieldType, ProFieldValueTypes } from '@cjy0208/pro-form'
import { useContextSize } from '@cjy0208/pro-provider'

// import Button from '../../components/Button'
import {
  useMount,
  useSetState,
  useUpdate,
  useMemoizedFn,
  useSize,
  useEventListener,
  useDebounceEffect,
  useFullscreen,
} from 'ahooks'

import { useProps, createPlugin } from '../../utils'
import useQueryFieldPlugin from '../queryField'
import useValueTypePlugin, { getAllFieldFromColumn } from '../valueType'
import useActionsPlugin from '../actions'
import useModalPlugin from '../modal'
import useConfigPlugin, { I18nText } from '../config'
// import '../../style.less'

import { ProTableProps, ProTableEditFieldType } from '../../types'

const FullscreenIcon = memo(function FullscreenIcon(props) {
  const { wrapperDomRef } = useProps<any>()
  const update = useUpdate()

  // const [isFullscreen, { enterFullscreen, exitFullscreen }] = useFullscreen(wrapperDomRef.current)

  useEffect(() => {
    if (!wrapperDomRef.current) {
      return
    }
    document.addEventListener('fullscreenchange', update)

    return () => {
      document.removeEventListener('fullscreenchange', update)
    }
  }, [])

  const isFullscreen = !!document.fullscreenElement

  useEffect(() => {
    if (isFullscreen) {
      wrapperDomRef.current.classList.add('f-pro-table-wrapper-fullscreen')
      document.body.classList.add('f-pro-table-scroll-block')
    } else {
      wrapperDomRef.current.classList.remove('f-pro-table-wrapper-fullscreen')
      document.body.classList.remove('f-pro-table-scroll-block')
    }
  }, [isFullscreen])

  return (
    <Action
      type="text"
      size="small"
      icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      onClick={() => {
        if (isFullscreen) {
          document.exitFullscreen()
          return
        }

        run(document.documentElement, 'requestFullscreen')
      }}
      {...props}
    />
  )
})

const TdCell = (props: any) => {
  // onMouseEnter, onMouseLeave在数据量多的时候，会严重阻塞表格单元格渲染，严重影响性能
  const { onMouseEnter, onMouseLeave, ...restProps } = props
  return <td {...restProps} />
}

function useFakeScrollBar(antdTableRef: React.RefObject<HTMLDivElement>) {
  const { pure = false, sticky = pure ? false : true, fakeStickyScrollBar = sticky } = useProps<ProTableProps>()

  const tableContentSize = useSize(run(antdTableRef?.current, 'querySelector', '.ant-table-body > table') ?? null)
  const lastScrollLeftRef = useRef(0)
  const tableContainerDomRef = useRef<HTMLTableElement>()
  const paginationDomRef = useRef<HTMLUListElement>()
  const [scrollContent] = useState(() => document.createElement('div'))
  const [scrollBar] = useState(() => {
    const scrollBar = document.createElement('div')
    scrollBar.className = 'fake-scrollBar'
    scrollBar.appendChild(scrollContent)
    return scrollBar
  })

  useEventListener(
    'scroll',
    () => {
      if (!tableContainerDomRef?.current) return
      if (lastScrollLeftRef.current === scrollBar?.scrollLeft) return
      tableContainerDomRef.current.scrollLeft = scrollBar?.scrollLeft
      lastScrollLeftRef.current = scrollBar?.scrollLeft
    },
    { target: scrollBar },
  )

  useEventListener(
    'scroll',
    () => {
      if (lastScrollLeftRef.current === tableContainerDomRef?.current!?.scrollLeft) return
      scrollBar.scrollLeft = tableContainerDomRef?.current!?.scrollLeft
      lastScrollLeftRef.current = tableContainerDomRef?.current!?.scrollLeft
    },
    { target: tableContainerDomRef.current },
  )

  useDebounceEffect(
    () => {
      if (!fakeStickyScrollBar || !sticky) {
        return
      }

      if (!tableContainerDomRef.current) {
        tableContainerDomRef.current = run<HTMLTableElement>(antdTableRef?.current, 'querySelector', '.ant-table-body')
      }

      if (!paginationDomRef.current) {
        paginationDomRef.current = run<HTMLUListElement>(
          antdTableRef?.current,
          'querySelector',
          '.ant-table + .ant-pagination',
        )
        run(paginationDomRef.current, 'appendChild', scrollBar)
      }

      const scrollable = (tableContentSize?.width ?? 0) > tableContainerDomRef?.current!?.offsetWidth
      scrollContent.style.display = scrollable ? 'block' : 'none'
      scrollContent.style.width = `${tableContentSize?.width}px`
    },
    [fakeStickyScrollBar, sticky, !fakeStickyScrollBar ? 0 : tableContentSize?.width],
    { wait: 100, maxWait: 800 },
  )
}

const PluginTable = memo(
  forwardRef(function PluginTable({ form }: { form: FormInstance }, ref) {
    const props = useProps<ProTableProps>()
    const {
      pure = false,
      showDataSourceIndex = false,
      dataSourceIndexColumnConfig = {},
      dataSourceIndexCalcWithPage = true,
      columns: propColumns = [],
      rowKey = 'id',
      selectable = false,
      columnActions,
      title,
      fixColumnActions,
      dataSource: propDataSource,
      hideColumnsWhenNoData = false,
      columnActionsConfig = {},
      // defaultTableSize = 'large',
      // size: propSize,
      pagination,
      mainStyle = pure ? { padding: 0 } : {},
      toolbarStyle,
      onEdit: propOnEdit,
      loading: propLoading,
      refreshAfterEdit = true,
      normalizeFieldValue = true,
      tableEditable: propTableEditable,
      rowSelection,
      sticky = pure ? false : true,
      fakeStickyScrollBar = sticky,
      components: propComponents,
      ...restProps
    } = props
    const onEdit = useMemoizedFn((...args) => run(propOnEdit, undefined, ...args))
    const { types, renderColumn, renderField: renderValueField } = useValueTypePlugin(() => [])
    const { setBuiltInLocale, t, setSize, size } = useConfigPlugin(({ size }) => [size])
    const [editableRowKey, setEditableRowKey] = useSetState<Record<string, any>>({})
    // const ctxSize = useContextSize() ?? 'middle'
    const tableFormConfigRef = useRef<any>({})

    const queryField = useQueryFieldPlugin(({ loading, paginationParams, selectedItems, dataSource }) => [
      loading,
      paginationParams,
      selectedItems,
      dataSource,
    ])

    const {
      loading: queryFieldLoading,
      paginationParams,
      setPaginationParams,
      getPaginationParams,
      selectedItems,
      setSelectedItems,
      setExtraParams,
      dataSource: tableDataSource,
    } = queryField
    const loading = queryFieldLoading || propLoading
    const queryService = queryField.service

    const {
      builtInActions,
      renderTableActions,
      renderIconActions,
      renderBatchActions,
      renderColumnsActions,
      setColumnActions,
      // setTableActions,
      setIconActions,
    } = useActionsPlugin(({ builtInActions }) => [builtInActions])

    const { renderStation } = useModalPlugin(() => [])
    const dataSource = propDataSource ?? tableDataSource

    const tableWrapperDomRef = useRef<HTMLDivElement>(null)
    const tableContentDomRef = useRef<HTMLDivElement>(null)
    const tableToolbarDomRef = useRef<HTMLDivElement>(null)
    const antdTableRef = useRef<any>(null)

    const tableEditable = propTableEditable ?? (pure ? false : propColumns.some(col => !!col.editField))

    useFakeScrollBar(antdTableRef)

    useImperativeHandle(ref, () => ({
      tableWrapperDomRef,
      tableToolbarDomRef,
      tableContentDomRef,
      antdTableRef,
      form,
    }))

    useMount(() => {
      setColumnActions({
        'table-edit': (record: any) => ({
          icon: <EditOutlined />,
          content: <I18nText text="table.edit" />,
          async onClick() {
            const key = record?.[String(run<string>(rowKey, undefined, record))]
            setEditableRowKey({ [key]: true })
          },
        }),
        'table-edit-save': (record: any) => ({
          icon: <CheckOutlined />,
          content: <I18nText text="table.save" />,
          async onClick() {
            const key = record?.[String(run<string>(rowKey, undefined, record))]
            const tableFormConfig: any = tableFormConfigRef.current?.[key]
            const [errors, allValues]: any[] = await catchPromise(
              form.validateFields(Object.values(tableFormConfig).map((config: any) => config?.name)),
            )

            if (errors) {
              // console.warn(errors)
              const firstErrorFileNamePath = errors?.errorFields?.[0]?.name
              form.scrollToField(firstErrorFileNamePath, { inline: 'center' }) // 横向滚动至居中
              return
            }

            const values = allValues?.[key]

            const { success, message: msg } = (await run(
              onEdit,
              undefined,
              Object.fromEntries(
                Object.entries(values).map(([key, value]) => [
                  key,
                  !normalizeFieldValue
                    ? value
                    : run(types?.[tableFormConfig?.[key]?.type as ProFieldValueTypes], 'normalizeValue', value) ??
                      value,
                ]),
              ),
              record,
            )) ?? {
              success: true,
            }

            if (!success) {
              if (msg) {
                message.error(msg)
              }
              return false
            }

            if (msg) {
              message.success(msg)
            }

            if (refreshAfterEdit) {
              setTimeout(queryField.refresh, 300)
            }

            setEditableRowKey({ [key]: false })

            return true
          },
        }),
        'table-edit-cancel': (record: any) => ({
          icon: <CloseOutlined />,
          content: <I18nText text="table.cancel" />,
          confirm: <I18nText text="table.cancelConfirm" />,
          async onClick() {
            const key = record?.[String(run<string>(rowKey, undefined, record))]
            setEditableRowKey({ [key]: false })
          },
        }),
      })

      setIconActions({
        fullscreen: <FullscreenIcon />,
      })
    })

    useEffect(() => {
      const sizeActionConfig = {
        icon: (
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu
                selectable
                selectedKeys={[size as string]}
                onSelect={({ key }) => {
                  setSize(key as any)
                }}
              >
                {[
                  {
                    key: 'large',
                    label: <I18nText text="table.densityLarger" />,
                  },
                  {
                    key: 'middle',
                    label: <I18nText text="table.densityMiddle" />,
                  },
                  {
                    key: 'small',
                    label: <I18nText text="table.densitySmall" />,
                  },
                ].map(item => (
                  <Menu.Item key={item?.key}>{item?.label}</Menu.Item>
                ))}
              </Menu>
            }
          >
            <ColumnHeightOutlined />
          </Dropdown>
        ),
        // tooltip: <I18nText text="table.density" />,
      }

      setIconActions({
        'table-size': sizeActionConfig,
        size: sizeActionConfig,
      })
    }, [size])

    const columns = (propColumns ?? [])
      .filter(Boolean)
      .filter(column => column?.hidden !== true && 'title' in column)
      .map(column => {
        const allField = getAllFieldFromColumn({
          ...column,
          viewField: !column?.viewField ? true : column?.viewField,
        })
        const editField = allField?.editField
        const viewField = allField?.viewField
        // const addField = allField?.addField ?? editField

        return {
          render: (value: any, record: any, idx: number) => (
            <Hook>
              {() => {
                const key = record?.[String(run<string>(rowKey, undefined, record))]
                const editable = tableEditable && !!editField && editableRowKey?.[key]

                // eslint-disable-next-line react-hooks/rules-of-hooks
                return useMemo(() => {
                  const fieldConfig = (editable ? editField : viewField) ?? viewField

                  const fixRowNamePath = (fieldNamePath: any) => [
                    key,
                    ...[isArray(fieldNamePath) ? fieldNamePath : [String(fieldNamePath)]],
                  ]

                  function getFieldConfig(extendFieldConfig: any) {
                    const fieldTypeName: ProFieldValueTypes = extendFieldConfig?.type ?? 'text'
                    const fieldType: any = types?.[fieldTypeName] ?? types.text
                    const initialValue = run(fieldType, 'normalizeFieldValue', value) ?? value
                    const fieldNamePath = editable ? fixRowNamePath(extendFieldConfig?.name) : undefined

                    const field: ProFieldValueFieldType = {
                      ...extendFieldConfig,
                      initialValue,
                      label: undefined,
                      style: { margin: 0 },
                      name: fieldNamePath,
                      ...(!editable && fieldTypeName === 'text' && !!initialValue
                        ? {
                            renderView: (...args) => (
                              <EllipsisTooltip>{run(types.text, 'renderView', ...args)}</EllipsisTooltip>
                            ),
                          }
                        : {}),
                    }

                    tableFormConfigRef.current = set(tableFormConfigRef.current, [key, String(column?.dataIndex)], {
                      type: fieldTypeName,
                      name: fieldNamePath,
                    })

                    return field
                  }

                  return (
                    renderValueField({
                      mode: editable ? 'edit' : 'view',
                      initialValue: value,
                      ...(isFunction(fieldConfig?.hook)
                        ? {
                            ...fieldConfig,
                            hook: () => {
                              const fixRowNamePathList = (fieldNamePathList: any) => {
                                if (!fieldNamePathList || fieldNamePathList === true) {
                                  return fieldNamePathList
                                }

                                if (isArray(fieldNamePathList)) {
                                  return fieldNamePathList.map(fixRowNamePath)
                                }

                                return undefined
                              }
                              // 因为目前 form 是全 table 共享的，会有一层额外的 namePath
                              // 此处传递给单个 item 的 form，需要消除这层 namePath 的影响
                              const rowForm: FormInstance = {
                                ...form,
                                getFieldValue: (name: any) => form.getFieldValue(fixRowNamePath(name)),
                                getFieldsValue: (nameList: any, ...args: any[]) =>
                                  form.getFieldsValue(fixRowNamePathList(nameList), ...args),
                                getFieldError: (name: any) => form.getFieldError(fixRowNamePath(name)),
                                getFieldsError: (nameList?: any) => form.getFieldsError(nameList),
                                getFieldWarning: (name: any) => form.getFieldWarning(fixRowNamePath(name)),
                                isFieldsTouched: (nameList?: any, ...args: any[]) =>
                                  form.isFieldsTouched(fixRowNamePathList(nameList), ...args),
                                isFieldTouched: (name: any) => form.isFieldTouched(fixRowNamePath(name)),
                                isFieldValidating: (name: any) => form.isFieldValidating(fixRowNamePath(name)),
                                isFieldsValidating: (nameList: any) =>
                                  form.isFieldsValidating(fixRowNamePathList(nameList)),
                                resetFields: (nameList?: any) => form.resetFields(fixRowNamePathList(nameList)),
                              } as any

                              return getFieldConfig(
                                run<ProTableEditFieldType>(fieldConfig, undefined, {
                                  item: record,
                                  form: rowForm,
                                  mode: !editable ? 'view' : 'edit',
                                }),
                              )
                            },
                          }
                        : getFieldConfig(fieldConfig)),
                    }) ?? '--'
                  )
                }, [value, record, editable])
              }}
            </Hook>
          ),
          showSorterTooltip: !!column?.tooltip ? false : true,
          // width: 80,
          ...column,
          onCell:
            column?.onCell ??
            // 内部处理 ellipsis 时单元格宽度未做限制导致属性无效的问题
            (column?.ellipsis && 'width' in column
              ? () => ({
                  style: {
                    maxWidth: column?.width,
                  },
                })
              : undefined),
          title: (
            <Space size={6}>
              {column?.title}
              <Tooltip config={column?.tooltip} />
            </Space>
          ),
        }
      })

    const hasToolbar =
      !!title || builtInActions.tableActionConfigs?.length > 0 || builtInActions.iconActionConfigs?.length > 0

    const dataSourceIndexBase = useMemo(() => {
      const { page = 1, pageSize = 10 } = paginationParams
      return dataSourceIndexCalcWithPage ? (page - 1) * pageSize : 0
    }, [dataSourceIndexCalcWithPage, paginationParams])

    // 确保任意时候 pagination 页数选项都是朝上弹起
    const selectComponentClass = useMemo(() => {
      const SelectComponentClass = (props: any) => {
        const { size } = useConfigPlugin(({ size }) => [size])
        return <Select {...props} placement="topRight" size={size === 'small' ? 'small' : 'middle'} />
      }

      SelectComponentClass.Option = Select.Option

      return SelectComponentClass
    }, [])

    const tableContent = (
      <AntdTable
        ref={antdTableRef}
        scroll={{ x: 'max-content' }}
        pagination={
          pagination === false
            ? false
            : dataSource?.length === 0
            ? false
            : {
                size: size === 'small' ? 'small' : 'default',
                pageSizeOptions: [5, 10, 20, 50],
                total: queryService?.data?.total,
                showQuickJumper: true,
                showSizeChanger: true,
                current: paginationParams?.page,
                pageSize: paginationParams?.pageSize,
                hideOnSinglePage: false,
                selectComponentClass,
                async onChange(page = 1, pageSize) {
                  const { page: prevPage, pageSize: prevPageSize } = getPaginationParams() ?? {}
                  if (`${prevPage}:${prevPageSize}` === `${page}:${pageSize}`) {
                    return
                  }
                  setPaginationParams(prevParams => ({
                    page: prevParams?.pageSize !== pageSize ? 1 : page,
                    pageSize,
                  }))
                  queryField.search()
                },
                showTotal: isExist(queryService?.data?.total)
                  ? total => <I18nText text="table.totalDataCount" args={[total]} />
                  : undefined,
                ...(isObject(pagination) ? pagination : {}),
              }
        }
        loading={loading}
        size={size as any}
        rowSelection={
          selectable && dataSource?.length > 0
            ? {
                fixed: true,
                selectedRowKeys: selectedItems.map((item: any) => item?.[run<string>(rowKey, undefined, item)]),
                onChange: (selectedRowKeys: React.Key[], selectedItems: any[]) => {
                  // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedItems: ', selectedItems)
                  setSelectedItems(selectedItems)
                },
                ...(isObject(rowSelection) ? rowSelection : {}),
              }
            : rowSelection
        }
        components={{
          ...(propComponents ?? {}),
          body: {
            cell: TdCell,
            ...(propComponents?.body ?? {}),
          },
        }}
        onChange={async (pagination, filters, sorters, extra) => {
          switch (extra?.action) {
            case 'paginate': {
              // do nothing
              break
            }
            default: {
              setExtraParams({ filters, sorters })
              queryField.search()
            }
          }
        }}
        {...(restProps as TableProps<any>)}
        sticky={sticky}
        rowKey={rowKey}
        dataSource={dataSource}
        columns={
          hideColumnsWhenNoData && dataSource?.length === 0
            ? []
            : ([
                showDataSourceIndex
                  ? {
                      title: <I18nText text="table.index" />,
                      dataIndex: '_index',
                      fixed: 'left',
                      render: (value: any, item: any, idx: number) => idx + 1 + dataSourceIndexBase,
                      ...dataSourceIndexColumnConfig,
                    }
                  : undefined,
                ...columns,
                builtInActions?.columnActionConfigs?.length > 0 && dataSource?.length > 0
                  ? {
                      title: <I18nText text="table.action" />,
                      key: 'action',
                      fixed: fixColumnActions ? 'right' : undefined,
                      align: 'center',
                      width: 10,
                      ...columnActionsConfig,
                      render: (_: any, record: any, idx: number) => {
                        const key = record?.[String(run<string>(rowKey, undefined, record))]
                        const editable = tableEditable && editableRowKey?.[key]

                        return (
                          <Hook>
                            {() =>
                              useMemo(
                                () =>
                                  renderColumnsActions(
                                    record,
                                    idx,
                                    dataSource,
                                    editable ? ['table-edit-save', 'table-edit-cancel'] : undefined,
                                  ),
                                [record, idx, dataSource, editable],
                              )
                            }
                          </Hook>
                        )
                      },
                    }
                  : undefined,
              ].filter(Boolean) as any)
        }
      />
    )

    return (
      <div
        className={classnames('f-pro-table-main', {
          'f-pro-table-main-no-toolbar': !hasToolbar,
          'f-pro-table-main-bordered': !pure,
        })}
        ref={tableWrapperDomRef}
        style={mainStyle}
      >
        {run(renderStation)}
        {hasToolbar && (
          <div className="f-pro-table-toolbar" ref={tableToolbarDomRef} style={toolbarStyle}>
            <div className="f-pro-table-left">
              <div className="f-pro-table-title">{title}</div>
            </div>
            <Space className="f-pro-table-right" size="middle">
              {builtInActions.tableActionConfigs?.length > 0 && (
                <div className="f-pro-table-actions">{renderTableActions()}</div>
              )}
              {builtInActions.iconActionConfigs?.length > 0 && (
                <div className="f-pro-table-settings">{renderIconActions()}</div>
              )}
            </Space>
          </div>
        )}
        {selectedItems?.length > 0 && (
          <div className="f-pro-table-alert">
            <Alert
              message={
                <div className="f-pro-table-alert-content">
                  <Space size="large">
                    <span>
                      <I18nText text="table.selectionTips" args={[selectedItems?.length]} />
                    </span>
                    <Space size={2}>
                      <Action
                        type="link"
                        size="small"
                        onClick={() => {
                          setSelectedItems([])
                        }}
                      >
                        <I18nText text="table.deselect" />
                      </Action>
                      <Action
                        type="link"
                        size="small"
                        onClick={() => {
                          const { page = 1, pageSize = 10 } = paginationParams

                          const currentDataSource =
                            dataSource?.length <= pageSize
                              ? dataSource
                              : dataSource.slice((page - 1) * pageSize, page * pageSize)

                          setSelectedItems(
                            currentDataSource
                              // 过滤不可选的项
                              .filter((item: any) => {
                                const { disabled = false } = run(rowSelection, 'getCheckboxProps', item) ?? {}

                                return !disabled
                              })
                              .filter((item: any) => !selectedItems.includes(item)),
                          )
                        }}
                      >
                        <I18nText text="table.inverse" />
                      </Action>
                    </Space>
                  </Space>
                  {builtInActions?.batchActionConfigs?.length > 0 && <div>{renderBatchActions()}</div>}
                </div>
              }
            />
          </div>
        )}
        <div
          className={classnames('f-pro-table-table', {
            'f-pro-table-table-sticky': sticky,
          })}
          ref={tableContentDomRef}
        >
          {tableEditable ? (
            <Form form={form} preserve={false}>
              {tableContent}
            </Form>
          ) : (
            tableContent
          )}
        </div>
      </div>
    )
  }),
)

export const useTablePlugin = createPlugin(() => {
  const tableRef = useRef<any>(null)
  const [form] = Form.useForm()

  return {
    tableRef,
    form,
    render: () => <PluginTable form={form} ref={tableRef} />,
  }
}, 'table')
export default useTablePlugin

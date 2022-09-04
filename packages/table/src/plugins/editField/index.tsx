/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  useRef,
  useImperativeHandle,
  createRef,
  forwardRef,
  useMemo,
  memo,
  useEffect,
  useState,
  useCallback,
  Fragment,
  isValidElement,
} from 'react'
import { Form, Space, message, FormInstance, Empty, Row, Col, Descriptions } from 'antd'
import { PlusOutlined, EditOutlined, ZoomInOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import {
  run,
  delay,
  groupBy,
  flatten,
  EventBus,
  isString,
  isArray,
  isFunction,
  isObject,
  isUndefined,
  isExist,
  pick,
} from '@cjy0208/tools'
import { useMount, useMemoizedFn } from 'ahooks'
import { FormItem, ProForm, ProFieldValueTypes, ProField } from '@cjy0208/pro-form'
import { Tooltip, ModalControllerType } from '@cjy0208/pro-utils'

// import FormItem from '../../components/FormItem'
import { createPlugin, useProps } from '../../utils'
import useActionsPlugin from '../actions'
import useValueTypePlugin, { getFieldFromColumn, getAllFieldFromColumn } from '../valueType'
import useModalPlugin from '../modal'

import useQueryFieldPlugin from '../queryField'
import useConfigPlugin, { I18nText } from '../config'
import { ProTableProps, ProTableEditFieldType, ProTableEditFieldsConfig, ProTableEditFieldMode } from '../../types'

const EditFields = memo(
  forwardRef(function EditFields(
    {
      item,
      readonly: modalReadonly,
      initialValues: propInitialValues = {},
      mode,
    }: { item?: any; readonly: boolean; initialValues?: any; mode: ProTableEditFieldMode },
    ref,
  ) {
    const {
      onEdit,
      onAdd,
      refreshAfterAdd = true,
      refreshAfterEdit = true,
      normalizeFieldValue = true,
      editFieldLayout = 'vertical',
      viewFieldLayout = editFieldLayout,
      addFieldLayout = editFieldLayout,
      editFieldColumns = 3,
      viewFieldColumns = editFieldColumns,
      addFieldColumns = editFieldColumns,
      editFieldGutter = [24, 0],
      viewFieldGutter = editFieldGutter,
      addFieldGutter = editFieldGutter,
      renderModalEditFields,
      renderModalViewFields = renderModalEditFields,
      renderModalAddFields = renderModalEditFields,
    } = useProps()

    const { confirmPromise } = useModalPlugin(() => [])
    const queryField = useQueryFieldPlugin()
    const [form] = Form.useForm()
    const getFieldsConfig = useAllFieldsConfig()
    const { types } = useValueTypePlugin(() => [])

    const fieldsConfig = getFieldsConfig(item, mode)

    const { fields, isAvailable } = fieldsConfig as ProTableEditFieldsConfig
    const { t } = useConfigPlugin(() => [])

    const fieldsMap = Object.assign(
      {},
      ...fields.map((field: ProTableEditFieldType) => ({
        [String(field?.name)]: isFunction(field?.hook)
          ? {
              ...field,
              hook: () => run(field?.hook, undefined, { item, form, mode }),
            }
          : field,
      })),
    )

    const getField = (fieldName: string): ProTableEditFieldType | undefined => {
      const field = fieldsMap?.[fieldName]
      if (!!field) {
        return { ...field }
      }

      return undefined
    }

    const layout = run<any>(
      {
        add: addFieldLayout,
        edit: editFieldLayout,
        view: viewFieldLayout,
      },
      mode,
      item,
      mode,
    )
    const gridColumns = run<any>(
      {
        add: addFieldColumns,
        edit: editFieldColumns,
        view: viewFieldColumns,
      },
      mode,
      item,
      mode,
    )
    const gridGutter = run<any>(
      {
        add: addFieldGutter,
        edit: editFieldGutter,
        view: viewFieldGutter,
      },
      mode,
      item,
      mode,
    )
    const renderModalFields = {
      add: renderModalAddFields,
      edit: renderModalEditFields,
      view: renderModalViewFields,
    }[mode]

    // 数据格式校验
    const initialValues = useMemo<Record<string, any>>(
      () =>
        Object.assign(
          {},
          ...[
            ...Object.entries(propInitialValues),
            ...Object.entries(fieldsMap)
              .map(([key, field]: any) => [key, field?.initialValue])
              .filter(([, value]) => !isUndefined(value)),
          ].map(([key, value]: any) => ({
            [key]: run(() => {
              const fieldType: any = types?.[getField(key)?.type as ProFieldValueTypes] ?? types.text
              return run(fieldType, 'normalizeFieldValue', value) ?? value
            }),
          })),
        ),
      [fieldsMap],
    )

    const changedRef = useRef(false)
    const proFormRef = useRef<any>()

    // window.proFormRef = proFormRef

    const submit = async () => {
      if (mode === 'view') {
        return
      }

      if (mode === 'add') {
        try {
          const params = await proFormRef?.current?.getValues()

          const { success, message: msg } = (await run(onAdd, undefined, params)) ?? {
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

          if (refreshAfterAdd) {
            setTimeout(queryField.refresh, 300)
          }

          return true
        } catch (err) {
          console.error(err)
          return false
        }
      }

      // edit 模式下如果没有改变就直接退出
      if (changedRef.current === false) {
        return
      }

      try {
        const params = await proFormRef?.current?.getValues()

        const { success, message: msg } = (await run(onEdit, undefined, params, item)) ?? {
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

        return true
      } catch (err) {
        console.error(err)
        return false
      }
    }

    const cancel = () => {
      if (changedRef.current && Object.values(form.getFieldsValue()).filter(value => isExist(value))?.length > 0) {
        return confirmPromise(t('editField.saveTips'), {})
      }

      return true
    }

    useImperativeHandle(ref, () => ({ submit, cancel, proFormRef }))

    const defaultRenderFields = ({ renderDescriptions, renderFields }: any) => {
      if (!isAvailable) {
        return <Empty />
      }

      if (mode === 'view') {
        return renderDescriptions()
      }

      return renderFields()
    }

    return (
      <ProForm
        key={mode}
        ref={proFormRef}
        normalizeFieldValue={normalizeFieldValue}
        fields={
          Object.values(fieldsMap).map((field: any) => ({
            ...field,
            mode: field?.mode ?? (field?.readonly || mode === 'view' ? 'view' : 'edit'),
            initialValue: initialValues?.[String(field?.name)] ?? form.getFieldValue(field?.name),
          })) as any
        }
        form={form}
        layout={layout}
        gridColumns={gridColumns}
        gridGutter={gridGutter}
        onValuesChange={() => {
          changedRef.current = true
        }}
        render={({ renderField, renderFields }) => {
          const renderDescriptions = () => (
            <Descriptions layout={layout} bordered style={{ width: '100%' }} column={gridColumns} size="small">
              {Object.values(fieldsMap).map((field: any, idx: number) => (
                <Descriptions.Item
                  label={
                    field?.label && (
                      <Space size={6}>
                        {field?.label}
                        <Tooltip
                          config={field?.tooltip}
                          content={isString(field?.tooltip) ? <QuestionCircleOutlined /> : null}
                        />
                      </Space>
                    )
                  }
                  key={field?.key ?? field?.type ?? idx}
                >
                  {renderField({
                    ...field,
                    label: null,
                    mode: 'view',
                    fieldItemProps: {
                      style: { marginBottom: 0 },
                    },
                  })}
                </Descriptions.Item>
              ))}
            </Descriptions>
          )

          return run(renderModalFields ?? defaultRenderFields, undefined, {
            fieldsMap,
            fieldsConfig,
            getField,
            renderField,
            renderFields,
            renderDescriptions,
            form,
            item,
            mode,
          })
        }}
      />
    )
  }),
)

function useColumnFields(propKey: string) {
  const { columns = [] } = useProps()
  const columnFields = useMemo(
    () =>
      columns
        .map((col: any) => {
          if (col?.[propKey] === false) {
            return undefined
          }

          if (['editField', 'viewField'].includes(propKey)) {
            return getFieldFromColumn(col, propKey)
          }

          const allField = getAllFieldFromColumn(col)

          if (propKey === 'addField') {
            return allField?.addField ?? allField?.editField
          }

          return undefined
        })
        .filter(Boolean),
    [columns, propKey],
  )

  return columnFields
}

function useSingleFieldsConfig({ propKey, columnKey }: { propKey: string; columnKey: string }) {
  const props = useProps()
  const columnFields = useColumnFields(columnKey)
  const getFields = props?.[propKey] ?? columnFields

  const getSingleFieldsConfig = useCallback(
    (item, ...args: any[]) => {
      const fields = run<any>(getFields, undefined, item, ...args)

      const isAvailable = fields?.length > 0

      if (!isAvailable) {
        return undefined
      }

      return {
        isAvailable,
        fields,
      }
    },
    [getFields],
  )

  return getSingleFieldsConfig
}

function useAllFieldsConfig() {
  const getEditFieldsConfig = useSingleFieldsConfig({
    propKey: 'editFields',
    columnKey: 'editField',
  })

  const justGetViewFieldsConfig = useSingleFieldsConfig({
    propKey: 'viewFields',
    columnKey: 'viewField',
  })

  const justGetAddFieldsConfig = useSingleFieldsConfig({
    propKey: 'addFields',
    columnKey: 'addField',
  })

  const getAddFieldsConfig = useCallback(
    () =>
      run(justGetAddFieldsConfig, undefined, undefined, 'add') ?? run(getEditFieldsConfig, undefined, undefined, 'add'),
    [getEditFieldsConfig, justGetAddFieldsConfig],
  )

  const getViewFieldsConfig = useCallback(
    item => run(justGetViewFieldsConfig, undefined, item, 'view') ?? run(getEditFieldsConfig, undefined, item, 'view'),
    [getEditFieldsConfig, justGetViewFieldsConfig],
  )

  const getFieldsConfig = useCallback(
    (item, mode: ProTableEditFieldMode) =>
      run<ProTableEditFieldsConfig>(
        {
          view: getViewFieldsConfig,
          add: getAddFieldsConfig,
          edit: getEditFieldsConfig,
        },
        mode,
        item,
        mode,
      ) ?? { fields: [], isAvailable: false },
    [getViewFieldsConfig, getAddFieldsConfig, getEditFieldsConfig],
  )

  return getFieldsConfig
}

export const useEditFieldPlugin = createPlugin(() => {
  const {
    onView,
    editFieldModalProps = {},
    addFieldModalProps = editFieldModalProps,
    viewFieldModalProps = editFieldModalProps,
  } = useProps<ProTableProps>()

  const { setTableActions, setColumnActions } = useActionsPlugin(() => [])
  const { showModal, showDrawer } = useModalPlugin(() => [])

  const { t } = useConfigPlugin(() => [])

  const showingModal = useRef(false)
  const modalController = useRef<ModalControllerType>(null)

  const showAddModal = useMemoizedFn(async () => {
    if (showingModal.current) {
      return
    }
    showingModal.current = true
    const ref = createRef()
    const modalProps = run<any>(addFieldModalProps, undefined, undefined, 'add')
    const show = modalProps?.drawer ? showDrawer : showModal

    // @ts-ignore
    modalController.current = show({
      title: t('editField.add'),
      maskClosable: false,
      okText: t('modal.confirm'),
      ...modalProps,
      content: <EditFields ref={ref} mode="add" readonly={false} />,
      onOk: () => run(ref.current, 'submit'),
      onCancel: () => run(ref.current, 'cancel'),
    })

    await modalController.current?.promise
    showingModal.current = false
  })

  // view 与 edit 暂时共用此函数
  const showEditModal = useMemoizedFn(async (item: any, customizedModalConfig: any = {}) => {
    const readonly = customizedModalConfig?.readonly ?? false

    if (showingModal.current) {
      return
    }

    await delay(100)
    const { success, data: details } = (await run(onView, undefined, item)) ?? {
      data: item,
      success: true,
    }

    if (!success) {
      console.warn('editField plugin onView failed')
      return
    }
    showingModal.current = true
    const ref = createRef()
    const modalProps = run<any>(
      readonly ? viewFieldModalProps : editFieldModalProps,
      undefined,
      details ?? item,
      readonly ? 'view' : 'edit',
    )
    const show = modalProps?.drawer ? showDrawer : showModal

    // @ts-ignore
    modalController.current = show({
      title: readonly ? t('editField.details') : t('editField.edit'),
      maskClosable: readonly,
      okText: readonly ? t('modal.okText') : t('modal.confirm'),
      ...modalProps,
      content: (
        <EditFields
          ref={ref}
          initialValues={details ?? item ?? {}}
          item={details ?? item}
          mode={readonly ? 'view' : 'edit'}
          readonly={readonly}
        />
      ),
      onOk: () => run(ref.current, 'submit'),
      onCancel: () => run(ref.current, 'cancel'),
      cancelButtonProps: readonly ? { style: { display: 'none' } } : undefined,
    })

    await modalController.current?.promise
    showingModal.current = false
  })

  useMount(() => {
    setTableActions({
      add: {
        type: 'primary',
        icon: <PlusOutlined />,
        content: <I18nText text="editField.add" />,
        async onClick() {
          await showAddModal()
        },
      },
    })

    setColumnActions({
      view: (record: any) => ({
        icon: <ZoomInOutlined />,
        content: <I18nText text="editField.details" />,
        async onClick() {
          await showEditModal(record, {
            readonly: true,
          })
        },
      }),
      edit: (record: any) => ({
        icon: <EditOutlined />,
        content: <I18nText text="editField.edit" />,
        async onClick() {
          await showEditModal(record)
        },
      }),
      'view-icon': {
        builtIn: 'view',
        tooltip: <I18nText text="editField.details" />,
        content: null,
      },
      'edit-icon': {
        builtIn: 'edit',
        tooltip: <I18nText text="editField.edit" />,
        content: null,
      },
    })
  })

  return useMemo(
    () => ({
      showAddModal,
      showEditModal,
      modalController,
    }),
    [showAddModal, showEditModal],
  )
}, 'editField')
export default useEditFieldPlugin

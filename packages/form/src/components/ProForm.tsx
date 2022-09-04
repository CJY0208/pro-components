/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactNode, useRef, useImperativeHandle, forwardRef, useMemo, memo, isValidElement } from 'react'
import { Form, FormProps, FormInstance, RowProps, FormItemProps } from 'antd'
import { run, flatten, isString, isArray, isFunction, isObject, classnames, pick, isUndefined } from '@cjy0208/tools'
import { Hook, ErrorBoundary, Grid, GridProps, GridConfig } from '@cjy0208/pro-utils'
import { useContextSize } from '@cjy0208/pro-provider'
import hoistStatic from 'hoist-non-react-statics'

import ProField from './ProField'
import FormItem from './FormItem'

import { ProFieldValueTypes, ProFieldValueFieldType } from '../types'
import types from '../valueTypes'

type NamePath = FormItemProps['name']
export interface ProFormRenderParams<T = ProFieldValueFieldType> {
  renderField: (field: Omit<T, 'type'> | NamePath, overrideConfig?: Omit<T, 'name' | 'type'>) => ReactNode
  renderFields: (
    fields?: ((T | NamePath) | ReactNode)[] | ((T | NamePath) | ReactNode)[][],
    config?: GridProps,
  ) => ReactNode
  form: FormInstance
}

export interface ProFormProps extends Omit<FormProps, 'fields'> {
  mode?: 'view' | 'edit'
  fields?: ProFieldValueFieldType[] | ProFieldValueFieldType[][]
  normalizeFieldValue?: boolean
  gridColumns?: number
  gridGutter?: RowProps['gutter']
  render?:
    | ((renderParams: ProFormRenderParams) => React.ReactNode)
    | ProFormProps['fields']
    | ((ProFieldValueFieldType | NamePath) | ReactNode)[]
    | ((ProFieldValueFieldType | NamePath) | ReactNode)[][]
  children?: React.ReactNode | ProFormProps['render']
}

const CodeProForm = memo(
  forwardRef(function ProForm(
    {
      mode = 'edit',
      form: propForm,
      layout = 'vertical',
      fields: propFields = [],
      gridColumns = 3,
      size: propSize,
      gridGutter: propRridGutter,
      normalizeFieldValue = true,
      children,
      render: propRender, // customizedRenderFields,
      ...restProps
    }: ProFormProps,
    ref: any,
  ) {
    const contextSize = useContextSize()
    const size = propSize ?? contextSize
    const gridGutter = propRridGutter ?? size === 'small' ? 12 : 16
    const [form] = Form.useForm(propForm)
    const fields = flatten<ProFieldValueFieldType>(propFields)
    const fieldsMap = useMemo<Record<string, ProFieldValueFieldType>>(
      () =>
        fields.reduce((map: any, field: ProFieldValueFieldType) => {
          const name = String(field?.name)
          return {
            ...map,
            [name]: { mode, ...(map?.[name] ?? {}), ...field },
          }
        }, {}) as any,
      [fields],
    )

    const fieldsMapRef = useRef<any>({})

    const renderField = (
      fieldConfig: ProFieldValueFieldType | NamePath,
      overrideConfig?: Omit<ProFieldValueFieldType, 'name'>,
    ) => {
      const fieldName = String((fieldConfig as ProFieldValueFieldType)?.name ?? fieldConfig)

      if ((isString(fieldConfig) || isArray(fieldConfig)) && !fieldsMap?.[fieldName]) {
        return null
      }

      if (isObject(fieldConfig)) {
        fieldConfig = { ...(fieldConfig as any) }
        delete (fieldConfig as any).name
        delete (fieldConfig as any).type
      }

      const field = {
        ...(fieldsMap?.[fieldName] ?? {}),
        ...(isObject(fieldConfig) ? { ...(fieldConfig as any) } : {}),
        ...(overrideConfig ?? {}),
      }

      if (field?.mode === 'view') {
        field.initialValue =
          field?.initialValue ??
          run(() => {
            try {
              return form.getFieldValue(fieldName)
            } catch (err) {
              return undefined
            }
          })
      }

      if (!field.name) {
        return null
      }

      return (
        <ProField
          {...(isFunction(field?.hook)
            ? {
                ...field,
                hook: () => {
                  let dynamicField = run<any>(field?.hook, undefined, { form })

                  if (dynamicField === undefined || dynamicField === true) {
                    dynamicField = {}
                  }

                  if (
                    (dynamicField?.mode ?? field?.mode) === 'view' &&
                    isObject(dynamicField) &&
                    !isValidElement(dynamicField)
                  ) {
                    dynamicField.initialValue =
                      dynamicField?.initialValue ??
                      field?.initialValue ??
                      run(() => {
                        try {
                          return form.getFieldValue(fieldName)
                        } catch (err) {
                          return undefined
                        }
                      })
                  }

                  return dynamicField
                },
              }
            : field)}
          ref={(ref: any) => {
            fieldsMapRef.current[fieldName] = ref
          }}
        />
      )
    }

    const adaptGridConfig = (config: any): GridConfig | undefined => {
      if (
        isValidElement(config) &&
        config?.type === FormItem &&
        isUndefined((config?.props as any)?.label) &&
        layout === 'vertical'
      ) {
        config = React.cloneElement(config, {
          ...(config?.props as any),
          label: ' ',
        })
      }

      const content = config?.content ?? (isValidElement(config) ? config : renderField(config))

      return {
        ...(isObject(config) && !isValidElement(config)
          ? pick(config, ['flex', 'offset', 'order', 'pull', 'push', 'span', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
          : {}),
        span: config?.colSpan ?? fieldsMap?.[config?.name ?? config]?.colSpan,
        content: isString(content) || isValidElement(content) ? content : null,
      }
    }

    const renderFields = (
      configs: (ProFieldValueFieldType | NamePath)[] = Object.keys(fieldsMap),
      config: any = {},
    ) => (
      <Grid
        columns={gridColumns}
        gutter={gridGutter}
        {...config}
        layout={run(() => {
          if (isArray(configs?.[0])) {
            return configs.map((configs: any) => configs.map(adaptGridConfig))
          }

          return configs.map(adaptGridConfig)
        })}
      />
    )

    const defaultRenderFields = () => {
      if (isArray(propFields?.[0])) {
        return renderFields(propFields as any)
      }

      return renderFields(Object.keys(fieldsMap))
    }

    const antdFormRef = useRef<any>()

    const getValues = async (...args: any[]) => {
      const values = await form.validateFields(...args)
      const params = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
          key,
          !normalizeFieldValue
            ? value
            : run(types?.[fieldsMapRef.current[key]?.current?.type as ProFieldValueTypes], 'normalizeValue', value) ??
              value,
        ]),
      )

      return params
    }

    useImperativeHandle(ref, () => ({
      antdFormRef,
      fieldsMapRef,
      form,
      getValues,
    }))

    return (
      <ErrorBoundary>
        <Form
          ref={antdFormRef as any}
          form={form}
          layout={layout}
          preserve={false}
          className={classnames('f-pro-form-grid-field', restProps?.className)}
          size={size}
          {...restProps}
        >
          {isValidElement(children) ? (
            children
          ) : (
            <Hook>
              {() => {
                const params = {
                  renderField,
                  renderFields,
                  form,
                  antdFormRef,
                  fieldsMapRef,
                }

                const customizedRenderFields = isFunction(children) ? children : propRender

                const renderResult = run(
                  isArray(customizedRenderFields)
                    ? () => renderFields(customizedRenderFields as any[])
                    : customizedRenderFields ?? defaultRenderFields,
                  undefined,
                  params,
                )

                if (isArray(renderResult)) {
                  return renderFields(renderResult)
                }

                return renderResult
              }}
            </Hook>
          )}
        </Form>
      </ErrorBoundary>
    )
  }),
)

type CodeProFormType = typeof CodeProForm
type FormType = typeof Form

interface ProFormType extends CodeProFormType {
  useForm: typeof Form.useForm
}

interface ProFormType extends FormType {}

const ProForm: ProFormType = hoistStatic(CodeProForm, Form) as ProFormType
ProForm.Item = FormItem

export default ProForm

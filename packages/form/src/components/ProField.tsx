import React, {
  memo,
  useEffect,
  isValidElement,
  forwardRef,
  useImperativeHandle,
  useRef,
  useContext,
  useState,
} from 'react'
import { Space, Form } from 'antd'
import { FormContext } from 'antd/es/form/context'
import { useSafeState } from 'ahooks'
import { QuestionCircleOutlined, CheckOutlined, CopyOutlined } from '@ant-design/icons'
import {
  random,
  run,
  isArray,
  isString,
  isObject,
  memoize,
  isFunction,
  copy,
  isUndefined,
  pick,
  isBoolean,
  isExist,
  isNumber,
  classnames,
} from '@cjy0208/tools'
import { Action, Tooltip, ErrorBoundary } from '@cjy0208/pro-utils'

import FormItem from './FormItem'
import { ProFieldValueFieldType, ProFieldValueTypes } from '../types'
import types from '../valueTypes'

function CopyButton({ text, ...props }: any) {
  const [done, setDone] = useSafeState(false)

  useEffect(() => {
    if (done) {
      setTimeout(() => setDone(false), 3000)
    }
  }, [done])

  return (
    <Action
      size="small"
      type="link"
      {...props}
      icon={done ? <CheckOutlined style={{ color: '#52c41a' }} /> : <CopyOutlined />}
      onClick={() => {
        copy(text)
        setDone(true)
      }}
    />
  )
}

const ReadonlyField = memo(function ReadonlyField(props: { field?: ProFieldValueFieldType } = {}) {
  const { field: propField } = props
  const {
    // key,
    tooltip,
    props: fieldProps = {},
    fieldItemProps = {},
    type: fieldTypeName = 'text',
    options: fieldOptions,
    renderField,
    renderView = (types?.[(fieldTypeName as ProFieldValueTypes) ?? 'text'] as any)?.renderView,
    disabled,
    required,
    copyable,
    format,
    hook,
    placeholder,
    ...field
  } = propField as ProFieldValueFieldType
  const value = field?.initialValue ?? field?.value

  const content = run<any>(renderView, undefined, value, { options: fieldOptions, ...field }) ?? '--'

  if (isObject(content) && !isValidElement(content)) {
    console.warn('ProTable.valueType.renderField error! not a valid element', content, { field })
    return null
  }

  return (
    <FormItem
      {...fieldItemProps}
      {...field}
      label={
        field?.label && (
          <Space direction="horizontal" size={6}>
            {field?.label}
            <Tooltip config={tooltip} content={isString(tooltip) ? <QuestionCircleOutlined /> : null} />
          </Space>
        )
      }
      {...(fieldItemProps ?? {})}
      className={classnames('f-pro-form-field', fieldItemProps?.className)}
    >
      {!!value && copyable && (
        <CopyButton
          className="f-pro-form-field-copy-button"
          text={String(value)}
          {...((isObject(copyable) ? copyable : {}) as any)}
        />
      )}
      {content}
    </FormItem>
  )
})

const EditableField = memo(function EditableField(props: { field?: ProFieldValueFieldType } = {}) {
  const { field: propField, ...restProps } = props
  const {
    // key,
    tooltip,
    props: fieldProps = {},
    fieldItemProps = {},
    type: fieldTypeName = 'text',
    options: fieldOptions,
    renderField,
    renderView,
    disabled,
    required,
    copyable,
    format,
    hook,
    placeholder,
    ...field
  } = propField as ProFieldValueFieldType

  const fieldType: any = types?.[fieldTypeName as ProFieldValueTypes] ?? types.text
  const { defaultValue, ...restFieldProps } = {
    ...restProps,
    defaultValue: field?.initialValue,
    disabled,
    ...(placeholder ? { placeholder } : {}),
    ...(run<any>(fieldProps) ?? {}),
  } as any

  return (
    <FormItem
      valuePropName={fieldTypeName === 'switch' ? 'checked' : undefined}
      {...(isBoolean(required) ? { required } : {})}
      {...fieldItemProps}
      {...field}
      className={classnames('f-pro-form-field', fieldItemProps?.className)}
      label={
        field?.label && (
          <Space size={6}>
            {field?.label}
            <Tooltip config={tooltip} content={isString(tooltip) ? <QuestionCircleOutlined /> : null} />
          </Space>
        )
      }
      rules={
        field?.rules ??
        (required // 如果存在 field?.required 属性，则作为快捷配置
          ? [{ required: true, message: isString(required) ? required : undefined }]
          : undefined)
      }
      initialValue={
        !isUndefined(defaultValue) ? run(fieldType, 'normalizeFieldValue', defaultValue) ?? defaultValue : undefined
      }
    >
      {run(() => {
        if (isFunction(renderField)) {
          return renderField({ fieldProps, ...props })
        }

        if (fieldTypeName in types) {
          if (
            [
              'select',
              'multipleSelect',
              'checkbox',
              'radio',
              'radioButton',
              'cascader',
              'treeSelect',
              'multipleTreeSelect',
              'switch',
              'transfer',
            ].includes(fieldTypeName)
          ) {
            restFieldProps.options = fieldOptions
          }

          return types?.[fieldTypeName]!?.renderField({ fieldProps: restFieldProps, ...props })
        }

        return types?.text?.renderField({ fieldProps: restFieldProps, ...props })
      })}
    </FormItem>
  )
})

const CoreField = memo(function CoreField(props: { field?: ProFieldValueFieldType; config?: any } = {}) {
  const { field } = props
  const { mode = 'edit' } = field!

  if (mode === 'view') {
    return <ReadonlyField field={field} />
  }

  return <EditableField field={field} />
})

export interface ProFieldProps extends ProFieldValueFieldType {
  ref?: any
}

export const ProField = memo(
  forwardRef(function ProField(props: ProFieldProps = {}, ref: any) {
    const { ...propField } = props
    const { form } = useContext(FormContext) ?? {}
    const isFormWrapped = !!form // 判断 field 是否已经在 Form 内部
    const [randomName] = useState(() => `v${random(0, 9999, true)}`)

    if (!isFormWrapped) {
      propField.name = propField?.name ?? randomName
    }

    const { hook, dependencies, shouldUpdate = !dependencies, ...field } = propField as ProFieldValueFieldType
    const fieldRef = useRef(field)

    const key = isString(field?.key) ? `${field?.key}:${field?.type}` : field?.key ?? field?.type

    useImperativeHandle(ref, () => fieldRef)
    const content = (
      <ErrorBoundary key={key}>
        {run(() => {
          if (isFunction(hook)) {
            return (
              <FormItem shouldUpdate={shouldUpdate} dependencies={dependencies} noStyle>
                {(...args) => {
                  let dynamicField = hook(...args)!

                  if (dynamicField === undefined || dynamicField === true) {
                    dynamicField = {}
                  }

                  fieldRef.current = field

                  if (!isExist(dynamicField) || dynamicField === false) {
                    return null
                  }

                  if (isValidElement(dynamicField) || isString(dynamicField) || isNumber(dynamicField)) {
                    return dynamicField
                  }

                  if (isObject(dynamicField) && !isValidElement(dynamicField)) {
                    const mergedField = {
                      ...field,
                      ...dynamicField,
                    }

                    fieldRef.current = mergedField

                    return <CoreField field={mergedField} />
                  }

                  return null
                }}
              </FormItem>
            )
          }

          return <CoreField field={propField} />
        })}
      </ErrorBoundary>
    )

    const [innerForm] = Form.useForm()

    if (!isFormWrapped) {
      return (
        // 不在 form 内部时自动裹一层 form，使 field 可以脱离 form 独立工作
        <Form form={innerForm} component={false}>
          {content}
        </Form>
      )
    }

    return content
  }),
)

export default ProField

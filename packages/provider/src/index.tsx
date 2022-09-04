import React, { createContext, useContext } from 'react'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import SizeContext, { SizeType } from 'antd/es/config-provider/SizeContext'
import { ConfigProviderProps as AntdConfigProviderProps } from 'antd/es/config-provider'

import zh_CN from './locales/zh_CN'
import en_US from './locales/en_US'
import id_ID from './locales/id_ID'

const builtInLocaleMap = {
  zh_CN,
  en_US,
  id_ID,
  'zh-CN': zh_CN,
  'en-US': en_US,
  'id-ID': id_ID,
}

export const ProConfigContext = createContext<ProContextType>({})
export function useProContext() {
  return useContext(ProConfigContext)
}

export function useContextSize() {
  const antdContextSize = useContext(SizeContext)
  const proContext = useProContext()
  const contextSize = antdContextSize ?? proContext?.size

  return contextSize
}

export function ConfigProvider({ localeKey = 'zh_CN', locale = {}, size: propSize, children }: ConfigProviderProps) {
  const contextSize = useContext(SizeContext)
  const size = propSize ?? contextSize

  const mergedLocale = {
    ...(builtInLocaleMap?.[localeKey as 'en_US'] ?? {}),
    ...locale,
  }

  return (
    <AntdConfigProvider componentSize={size} locale={mergedLocale?.antdLocale}>
      <ProConfigContext.Provider
        value={{
          size,
          locale: mergedLocale,
        }}
      >
        {children}
      </ProConfigContext.Provider>
    </AntdConfigProvider>
  )
}

export default ConfigProvider

export type ProLocaleValue = string | React.ReactNode | ((...args: any[]) => string | React.ReactNode)

export interface ProContextType {
  size?: SizeType
  localeKey?: 'zh-CN' | 'zh_CN' | 'en-US' | 'en_US' | 'id-ID' | 'id_ID'
  locale?: {
    antdLocale?: AntdConfigProviderProps['locale']
    table?: {
      table?: {
        selectionTips?: ProLocaleValue
        deselect?: ProLocaleValue
        inverse?: ProLocaleValue
        action?: ProLocaleValue
        totalDataCount?: ProLocaleValue
        edit?: ProLocaleValue
        save?: ProLocaleValue
        cancel?: ProLocaleValue
        cancelConfirm?: ProLocaleValue
        density?: ProLocaleValue
        densityLarger?: ProLocaleValue
        densityMiddle?: ProLocaleValue
        densitySmall?: ProLocaleValue
      }
      actions?: {
        multipleDeleteConfirm?: ProLocaleValue
        multipleDelete?: ProLocaleValue
        deleteConfirm?: ProLocaleValue
        delete?: ProLocaleValue
        refreshTip?: ProLocaleValue
      }
      queryField?: {
        query?: ProLocaleValue
        reset?: ProLocaleValue
        fold?: ProLocaleValue
        more?: ProLocaleValue
      }
      valueType?: {
        inputPassword?: ProLocaleValue
        inputContent?: ProLocaleValue
        chooseContent?: ProLocaleValue
        startTime?: ProLocaleValue
        endTime?: ProLocaleValue
      }
      editField?: {
        add?: ProLocaleValue
        details?: ProLocaleValue
        edit?: ProLocaleValue
      }
      modal?: {
        okText?: ProLocaleValue
        cancelText?: ProLocaleValue
      }
    }
  }
}

export interface ConfigProviderProps extends ProContextType {
  children?: React.ReactNode
}

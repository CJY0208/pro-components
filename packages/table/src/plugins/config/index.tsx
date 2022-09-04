/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useMemo, useState, useContext, useEffect } from 'react'
import { useSetState, useMemoizedFn } from 'ahooks'
// import { Dropdown, Menu } from 'antd'
// import { ColumnHeightOutlined } from '@ant-design/icons'
import { run } from '@cjy0208/tools'
import SizeContext from 'antd/es/config-provider/SizeContext'

import { createPlugin, useProps } from '../../utils'
import { ProTableProps } from '../../types'

import { useProContext } from '@cjy0208/pro-provider'
import provider_zh_CN from '@cjy0208/pro-provider/es/locales/zh_CN'
import provider_en_US from '@cjy0208/pro-provider/es/locales/en_US'
import provider_id_ID from '@cjy0208/pro-provider/es/locales/id_ID'

const zh_CN = provider_zh_CN?.table ?? {}
const en_US = provider_en_US?.table ?? {}
const id_ID = provider_id_ID?.table ?? {}

const builtInLocaleMap = {
  zh_CN,
  en_US,
  id_ID,
  'zh-CN': zh_CN,
  'en-US': en_US,
  'id-ID': id_ID,
}

export function I18nText({ text, args = [] }: { text: string; args?: any[] }) {
  const { getTranslatedText } = useConfigPlugin(({ getTranslatedText }) => [getTranslatedText])
  return <span>{getTranslatedText(text, ...args)}</span>
}

export const useConfigPlugin = createPlugin(() => {
  const props = useProps<ProTableProps>()
  const antdContextSize = useContext(SizeContext)
  const proContext = useProContext()
  const contextSize = antdContextSize ?? proContext?.size
  const {
    mini = contextSize === 'small' ?? false,
    localeKey = proContext?.localeKey,
    locale = proContext?.locale?.table ?? {},
    size: propSize,
    defaultSize = mini ? 'small' : contextSize ?? 'large',
  } = props

  const [innerSize, setInnerSize] = useState(defaultSize)
  const size = propSize ?? innerSize
  const [builtInLocale, setBuiltInLocale] = useSetState<Record<string, any>>({ ...zh_CN })

  useEffect(() => {
    setInnerSize(mini ? 'small' : defaultSize)
  }, [mini])

  const getTranslatedText = useCallback(
    (text: string, ...args: any[]) =>
      run<string>(locale, text, ...args) ??
      run<string>(builtInLocaleMap?.[localeKey!], text, ...args) ??
      run<string>(builtInLocale, text, ...args),
    [localeKey, locale, builtInLocale],
  )

  const t = useMemoizedFn((text: string, ...args: any[]) => {
    return getTranslatedText(text, ...args)
  })

  const jsxT = useMemoizedFn(
    (text: string, ...args: any[]): JSX.Element => {
      const component = { ...(<I18nText text={text} args={args} />) }
      component.toString = () => getTranslatedText(text, ...args)
      return component
    },
  )

  return useMemo(
    () => ({
      localeKey,
      t,
      jsxT,
      getTranslatedText,
      builtInLocale,
      setBuiltInLocale: setBuiltInLocale as (actions: Record<string, any>) => void,
      setSize: setInnerSize,
      size,
    }),
    [size, getTranslatedText, builtInLocale, setBuiltInLocale, localeKey],
  )
}, 'config')

export default useConfigPlugin

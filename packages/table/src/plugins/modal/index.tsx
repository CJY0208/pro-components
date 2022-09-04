/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useCallback, useRef } from 'react'
import { random } from '@cjy0208/tools'
import { Modal, ModalFuncProps } from 'antd'
import {
  showModal as showAntdModal,
  showDrawer as showAntdDrawer,
  ModalStation,
  ShowModalConfig,
  ShowDrawerConfig,
  confirmPromise as confirm,
} from '@cjy0208/pro-utils'
// import showAntdModal, { ModalStation, ShowModalConfig } from './showModal'
import { createPlugin } from '../../utils'
import useConfigPlugin from '../config'

function useModal() {
  const { t } = useConfigPlugin()
  const stationId = useMemo(() => `PRO_STATION_${random(1000, 9999)}`, [])
  const showModal = useCallback(
    (config: ShowModalConfig) =>
      showAntdModal({
        stationId,
        okText: t('modal.okText'),
        cancelText: t('modal.cancelText'),
        ...config,
      }),
    [],
  )
  const showDrawer = useCallback(
    (config: ShowDrawerConfig) =>
      showAntdDrawer({
        stationId,
        okText: t('modal.okText'),
        cancelText: t('modal.cancelText'),
        ...config,
      }),
    [],
  )
  const confirmPromise: typeof confirm = useCallback<any>(
    (content: any, restConfig: any = {}) =>
      confirm(content, {
        okText: t('modal.confirm'),
        cancelText: t('modal.cancelText'),
        ...restConfig,
      }),
    [],
  )
  const modalStationRef = useRef<HTMLDivElement>(null)

  return useMemo(
    () => ({
      stationId,
      showModal,
      showDrawer,
      confirmPromise,
      renderStation: () => <ModalStation id={stationId} ref={modalStationRef} />,
      modalStationRef,
    }),
    [],
  )
}

export const useModalPlugin = createPlugin(useModal, 'modal')
export default useModalPlugin

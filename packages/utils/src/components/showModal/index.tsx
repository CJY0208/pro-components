import React, { ReactNode, forwardRef } from 'react'
import { render } from 'react-dom'
import { Modal, message, ModalProps, Space } from 'antd'
import { useDebounce, useSetState, useSafeState } from 'ahooks'
import { run, isFunction, delay, classnames } from '@cjy0208/tools'
import DraggableModal, { DraggableModalProps } from './DraggableModal'

// import './style.less'

const VisibleModal = React.forwardRef(function VisibleModal(initialProps: any, ref: any) {
  const [
    {
      onOk = () => undefined,
      onCancel = () => undefined,
      okText = 'ok',
      cancelText = 'cancel',
      footer,
      content,
      children = content as any,
      ...props
    },
    updateProps,
  ] = useSetState(initialProps)
  const [state, setState] = useSetState<Record<string, any>>({})
  const [visible, setVisible] = useSafeState(true)
  const [confirmLoading, setConfirmLoading] = useSafeState(false)
  const debouncedConfirmLoading = useDebounce(confirmLoading, {
    wait: 100,
  })
  const getFooter = typeof footer === 'function' ? footer : () => footer
  const getContent = typeof children === 'function' ? children : () => children
  const handleOk = async () => {
    setConfirmLoading(true)
    let canClose
    try {
      canClose = await run(onOk)
    } finally {
      setConfirmLoading(false)
    }
    if (canClose !== false) {
      setVisible(false)
    }
  }
  const handleCancel = async () => {
    const canClose = await run(onCancel)
    if (canClose !== false) {
      setVisible(false)
    }
  }
  const modalProps = {
    visible,
    setVisible,
    confirmLoading,
    setConfirmLoading,
    handleOk,
    handleCancel,
    updateProps: (props: any = {}) => updateProps({ ...props, children: props?.children ?? props?.content }),
    state,
    setState,
  }

  React.useImperativeHandle(ref, () => modalProps)

  return (
    <DraggableModal
      {...props}
      confirmLoading={debouncedConfirmLoading}
      visible={visible}
      okText={okText}
      cancelText={cancelText}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={getFooter(modalProps)}
      destroyOnClose
    >
      {/*调用时可以content: updateProps => () 暂时问题*/}
      {getContent(modalProps)}
    </DraggableModal>
  )
})

export const stationMap: Record<string, any> = {}

export const modalControllers = new Set<any>()
export const closeAll = async () => {
  try {
    // @ts-ignore
    ;[...modalControllers.values()].map(controller => run(controller?.close))
    Modal.destroyAll()
    message.destroy()
    await delay(60)
  } catch (err) {
    console.error(err)
  }
}

// window.closeAll = closeAll

// window.showModal = showModal

// console.log(window.showModal)

// window.Modal = Modal
// window.message = message

export type ModalControllerType = {
  promise: Promise<void>
  close: () => void
  update: (updateProps: Record<string, any>) => void
}
export interface ShowModalConfig extends DraggableModalProps {
  stationId?: string
  content: ReactNode | ((controller: ModalControllerType) => ReactNode)
  greyBody?: boolean
}

export default function showModal({
  stationId = 'DEFAULT_STATION',
  afterClose = () => null,
  content,
  className,
  greyBody,
  ...props
}: ShowModalConfig): ModalControllerType {
  const id = Math.random()
  const modalRef = React.createRef()
  let resolvPromise: any = () => null
  const promise = new Promise<void>(resolve => {
    resolvPromise = resolve
  })

  const controller = {
    promise,
    close() {
      run(modalRef, 'current.setVisible', false)
    },
    update(updateProps: Record<string, any> = {}) {
      run(modalRef, 'current.updateProps', updateProps)
    },
  }
  run(stationMap[stationId], 'add', id, () => (
    <VisibleModal
      width="60%"
      className={classnames('f-pro-utils-modal', className, {
        'f-pro-utils-modal-grey-body': greyBody,
      })}
      {...props}
      ref={modalRef}
      afterClose={() => {
        afterClose()
        run(stationMap[stationId], 'remove', id)
        resolvPromise()
        modalControllers.delete(controller)
      }}
    >
      {(modalController: any) =>
        run(content ?? '', undefined, {
          ...controller,
          ...modalController,
        })
      }
    </VisibleModal>
  ))

  modalControllers.add(controller)

  return controller
}

export const ModalStation = forwardRef(function ModalStation({ id }: { id: string }, ref) {
  const [modalMap, setModalMap] = React.useState({})

  React.useEffect(() => {
    stationMap[id] = {
      add: (id: string, render: Function) =>
        setModalMap(map => ({
          ...map,
          [id]: render,
        })),
      remove: (id: string) =>
        setModalMap(map => ({
          ...map,
          [id]: undefined,
        })),
    }

    return () => {
      delete stationMap[id]
    }
  }, [id])

  return (
    <div ref={ref as any}>
      {Object.entries(modalMap)
        .filter(([, render]) => isFunction(render))
        .map(([key, render]) => (
          <div key={key}>{run(render)}</div>
        ))}
    </div>
  )
})

const portalContainer = document.createElement('div')
document.body.appendChild(portalContainer)

render(<ModalStation id="DEFAULT_STATION" />, portalContainer)

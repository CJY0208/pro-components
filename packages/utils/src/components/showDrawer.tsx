import React, { ReactNode, forwardRef, useContext } from 'react'
import { Drawer, message, DrawerProps as AntdDrawerProps, Space, ModalProps } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useDebounce, useMount, useSetState, useSafeState } from 'ahooks'
import { run, isFunction, delay, classnames } from '@cjy0208/tools'
import SizeContext from 'antd/es/config-provider/SizeContext'

import { stationMap, modalControllers, ModalControllerType } from './showModal'

import Button from './Button'

// import './style.less'

export interface DrawerProps extends AntdDrawerProps {
  content?: any
}

export interface DrawerProps
  extends Pick<
    ModalProps,
    | 'onOk'
    | 'onCancel'
    | 'okText'
    | 'cancelText'
    | 'okButtonProps'
    | 'cancelButtonProps'
    | 'afterClose'
    | 'className'
    | 'children'
    | 'width'
  > {}

export interface ShowDrawerConfig extends DrawerProps {
  stationId?: string
  content: ReactNode | ((controller: ModalControllerType) => ReactNode)
  greyBody?: boolean
}

const VisibleDrawer = React.forwardRef(function VisibleDrawer(initialProps: DrawerProps, ref: any) {
  const [
    {
      onOk = () => undefined,
      onCancel = () => undefined,
      okText = 'ok',
      cancelText = 'cancel',
      okButtonProps = {},
      cancelButtonProps = {},
      footer: propFooter,
      content,
      children = content as any,
      placement = 'right',
      className,
      ...props
    },
    updateProps,
  ] = useSetState(initialProps)
  const size = useContext(SizeContext)
  const [state, setState] = useSetState<Record<string, any>>({})
  const [visible, setVisible] = useSafeState(false)
  const [confirmLoading, setConfirmLoading] = useSafeState(false)
  const debouncedConfirmLoading = useDebounce(confirmLoading, {
    wait: 100,
  })
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
  const footer = propFooter ?? (
    <Space style={placement !== 'right' ? { width: '100%', justifyContent: 'right' } : {}}>
      <Button {...cancelButtonProps} onClick={handleCancel}>
        {cancelText}
      </Button>
      <Button type="primary" loading={debouncedConfirmLoading} {...okButtonProps} onClick={handleOk}>
        {okText}
      </Button>
    </Space>
  )
  const getFooter = typeof footer === 'function' ? footer : () => footer
  const getContent = typeof children === 'function' ? children : () => children

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

  useMount(async () => {
    await delay(60)
    setVisible(true)
  })

  React.useImperativeHandle(ref, () => modalProps)

  return (
    <Drawer
      {...props}
      className={classnames(className, {
        'small-drawer': size === 'small',
      })}
      closable={placement === 'right'}
      extra={
        placement !== 'right' && (
          <button
            className="ant-drawer-close"
            style={{ position: 'relative', top: 2, margin: 0 }}
            onClick={handleCancel}
          >
            <CloseOutlined />
          </button>
        )
      }
      placement={placement}
      visible={visible}
      // okText={okText}
      // cancelText={cancelText}
      // onOk={handleOk}
      onClose={handleCancel}
      footer={getFooter(modalProps)}
      destroyOnClose
    >
      {/*调用时可以content: updateProps => () 暂时问题*/}
      {getContent(modalProps)}
    </Drawer>
  )
})

export default function showDrawer({
  stationId = 'DEFAULT_STATION',
  afterClose = () => null,
  afterVisibleChange,
  content,
  className,
  greyBody,
  ...props
}: ShowDrawerConfig): ModalControllerType {
  const id = Math.random()
  const modalRef = React.createRef()
  let resolvPromise: any = () => null
  const promise = new Promise<void>(resolve => {
    resolvPromise = resolve
  })

  // @ts-ignore
  delete props.drawer

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
    <VisibleDrawer
      width="60%"
      className={classnames('f-pro-utils-modal', className, {
        'f-pro-utils-modal-grey-body': greyBody,
      })}
      {...props}
      ref={modalRef}
      afterVisibleChange={(visible: boolean) => {
        if (!visible) {
          run(afterVisibleChange, undefined, visible)
          afterClose()
          run(stationMap[stationId], 'remove', id)
          resolvPromise()
          modalControllers.delete(controller)
        }
      }}
      // afterClose={() => {
      //   afterClose()
      //   run(stationMap[stationId], 'remove', id)
      //   resolvPromise()
      //   modalControllers.delete(controller)
      // }}
    >
      {(modalController: any) =>
        run(content ?? '', undefined, {
          ...controller,
          ...modalController,
        })
      }
    </VisibleDrawer>
  ))

  modalControllers.add(controller)

  return controller
}

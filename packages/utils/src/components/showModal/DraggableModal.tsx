import React, { useContext } from 'react'
import { Modal, Space } from 'antd'
import { ModalProps } from 'antd/es/modal'
import { FullscreenOutlined, FullscreenExitOutlined, CloseOutlined } from '@ant-design/icons'
import { clamp, classnames, throttle } from '@cjy0208/tools'
import { useGetState, useSafeState } from 'ahooks'
import hoist from 'hoist-non-react-statics'
import SizeContext from 'antd/es/config-provider/SizeContext'

class Drag {
  disX: any
  disY: any
  draggableElement: any
  box: any
  onStyleChange: any
  m: any
  u: any
  constructor({ draggableElement, moveElement, onStyleChange }: any) {
    this.disX = 0
    this.disY = 0
    this.draggableElement = draggableElement
    this.box = moveElement // document.getElementsByClassName(id)[0]
    this.onStyleChange = onStyleChange
    this.m = this.move.bind(this)
    this.u = this.up.bind(this)
  }

  init() {
    if (!this.draggableElement) return
    this.draggableElement.addEventListener('mousedown', this.down.bind(this))
    // this.onStyleChange({
    //   position: 'absolute',
    //   left: this.box.offsetLeft ?? (window.innerWidth - this.box.offsetWidth) / 2,
    //   top: this.box.offsetTop ?? (window.innerHeight - this.box.offsetHeight) / 2,
    // })
  }

  down(ev: any) {
    this.disX = ev.pageX - this.box.offsetLeft
    this.disY = ev.pageY - this.box.offsetTop
    document.addEventListener('mousemove', this.m)
    document.addEventListener('mouseup', this.u)
    document.body.classList.add('draggable-none-select')
  }

  move(ev: any) {
    const minVisableSize = 200 // 可拖到屏幕外的最小剩余尺寸
    this.onStyleChange({
      position: 'absolute',
      // left: clamp(ev.pageX - this.disX, 0, window.innerWidth - this.box.offsetWidth),
      // top: clamp(ev.pageY - this.disY, 0, window.innerHeight - this.box.offsetHeight),
      left: clamp(ev.pageX - this.disX, minVisableSize - this.box.offsetWidth, window.innerWidth - minVisableSize),
      top: clamp(ev.pageY - this.disY, 0, window.innerHeight - minVisableSize),
    })
  }

  up() {
    document.removeEventListener('mousemove', this.m)
    document.removeEventListener('mouseup', this.u)
    document.body.classList.remove('draggable-none-select')
  }
}

export interface DraggableModalProps extends ModalProps {
  draggable?: boolean
  fullscreenable?: boolean
  defaultFullscreen?: boolean
}

const DraggableModal: React.FC<ModalProps> = hoist(
  React.forwardRef(function DraggableModal(
    {
      wrapClassName,
      visible,
      style,
      draggable = true,
      fullscreenable = true,
      defaultFullscreen = false,
      onCancel,
      ...props
    }: DraggableModalProps,
    forwardedRef,
  ) {
    const size = useContext(SizeContext)
    const [draggableClassName] = useSafeState(() => `draggable-modal-${Math.floor(Math.random() * 100000)}`)
    const [draggableStyle, setDraggableStyle] = useSafeState({})
    const [fullscreen, setFullscreen, getFullscreen] = useGetState(defaultFullscreen)
    const styleRef = React.useRef(style)
    styleRef.current = style

    React.useEffect(() => {
      if (!draggable || !visible) return () => undefined

      const modalNode = document.querySelector(`.${draggableClassName} .ant-modal`)! as any

      const timer = setTimeout(() => {
        new Drag({
          moveElement: document.querySelector(`.${draggableClassName} .ant-modal`),
          draggableElement: document.querySelector(`.${draggableClassName} .ant-modal-header`),
          onStyleChange: (nextStyle: any) => {
            if (getFullscreen()) {
              return
            }

            if (!!styleRef.current) {
              setDraggableStyle(nextStyle)
              return
            }

            modalNode.style.position = nextStyle.position
            modalNode.style.left = `${nextStyle.left}px`
            modalNode.style.top = `${nextStyle.top}px`
          },
        }).init()
      })

      return () => clearTimeout(timer)
    }, [visible, draggable])

    const FullscreenIcon = fullscreen ? FullscreenExitOutlined : FullscreenOutlined

    return (
      <Modal
        wrapClassName={classnames(wrapClassName, {
          [draggableClassName]: draggable,
          'draggable-modal': !fullscreen && draggable,
          'fullscreenable-modal': fullscreenable,
          'fullscreening-modal': fullscreen,
          'small-modal': size === 'small',
        })}
        visible={visible}
        {...props}
        onCancel={onCancel}
        closeIcon={
          fullscreenable && (
            <div
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              <Space size="middle">
                <FullscreenIcon onClick={() => setFullscreen(value => !value)} />
                <CloseOutlined onClick={onCancel} />
              </Space>
            </div>
          )
        }
        style={{
          ...(style ?? {}),
          ...draggableStyle,
        }}
        // @ts-ignore
        ref={forwardedRef}
      />
    )
  }),
  Modal,
)

export default DraggableModal

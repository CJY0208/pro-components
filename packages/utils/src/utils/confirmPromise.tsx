import { Modal, ModalFuncProps } from 'antd'
import { isObject } from '@cjy0208/tools'

export default function confirmPromise(
  contentConfig: ModalFuncProps['content'] | ModalFuncProps,
  restConfig: ModalFuncProps = {},
) {
  let content = contentConfig
  let config: any = restConfig
  if (isObject(contentConfig)) {
    config = contentConfig
    content = null
  }

  return new Promise<boolean>(resolve => {
    Modal.confirm({
      content,
      ...config,
      ...restConfig,
      onOk() {
        resolve(true)
      },
      onCancel() {
        resolve(false)
      },
    })
  })
}

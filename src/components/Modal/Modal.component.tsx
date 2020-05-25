import * as React from 'react'

import { Button } from '../index'
import styles from './Modal.module.scss'

interface IProps {
  title?: string
  content: string | React.ReactElement | null
  footer?: null | React.ReactElement
  width?: number
  height?: number
  visible: boolean
  isScale?: boolean
  bodyStyle?: any
  onConfirm?: Function
  onCancel?: Function
}

const Modal: React.FunctionComponent<IProps> = (props) => {
  const {
    title,
    content,
    footer,
    width,
    height,
    visible,
    isScale, // 若为可伸缩，则 height 为 maxHeight，height 为 calc(100vh - 60px), width as the same
    bodyStyle,
    onCancel,
    onConfirm
  } = props

  function noop() {}

  if (!visible) {
    return null
  }

  const getFooter = () => {
    if (typeof footer === 'undefined') {
      return getDefaultFooter()
    }
    return footer
  }

  const getDefaultFooter = () => {
    return (
      <footer>
        <Button className={styles['cancel-btn']} name="取消" onClick={onCancel || noop} />
        <Button name="确定" type="confirm" onClick={onConfirm || noop} />
      </footer>
    )
  }

  const close = () => (onCancel || noop)()

  const style: any = {}
  if (width) {
    style.width = `${width}px`
  }
  if (height) {
    style.height = `${height}px`
  }
  if (isScale) {
    style.maxHeight = `${height}px`
    style.height = 'calc(100vh - 60px)'
    style.maxWidth = `${width}px`
    style.width = 'calc(100vw - 60px)'
  }

  return (
    <div className={styles.global}>
      <div className={styles.modal} style={style}>
        <header>
          {title ? <span>{title}</span> : null}
          <i className="iconfont icon-close" onClick={close}/>
        </header>
        <main style={bodyStyle}>
          {typeof content === 'string' ? <span>{content}</span> : content}
        </main>
        {getFooter()}
      </div>
      <div className={styles.bg} onClick={close}/>
    </div>
  )
}

export default Modal

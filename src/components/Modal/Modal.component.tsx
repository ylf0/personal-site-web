import * as React from 'react'

import styles from './Modal.module.scss'

interface IProps {
  title?: string
  content: string | React.ReactElement
  footer?: null | React.ReactElement
  onConfirm?: Function
  onCancel?: Function
}

const Modal: React.FunctionComponent<IProps> = (props) => {
  const { title, content, footer } = props

  const getFooter = () => {
    if (typeof footer === 'undefined') {
      return getDefaultFooter()
    }
    return footer
  }

  const getDefaultFooter = () => {
    return (
      <footer>
        <div className={`${styles.btn} ${styles['cancel-btn']}`}>取消</div>
        <div className={`${styles.btn} ${styles['confirm-btn']}`}>确定</div>
      </footer>
    )
  }

  return (
    <div className={styles.global}>
      <div className={styles.modal}>
        <header>
          {title ? <span>{title}</span> : null}
          <i className="iconfont icon-close"/>
        </header>
        <main>
          {typeof content === 'string' ? <span>{content}</span> : content}
        </main>
        {getFooter()}
      </div>
      <div className={styles.bg}/>
    </div>
  )
}

export default Modal

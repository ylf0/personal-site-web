import * as React from 'react'

import { Modal } from '../../components'
import styles from './Note.module.scss'

export default class Note extends React.Component {
  render() {
    return (
      <div className={styles['note-module']}>
        <div className={styles.create}>
          <i className="iconfont icon-plus"/>
        </div>
        <Modal
          title="创建笔记本"
          content="内容"
        />
      </div>
    )
  }
}

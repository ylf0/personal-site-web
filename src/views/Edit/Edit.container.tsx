import React from 'react'

import OperationPanel from '../../components/OperationPanel/index.component'

import styles from './Edit.module.scss'
import 'draft-js/dist/Draft.css'

interface IProps {}

const Edit: React.FC<IProps> = () => {

  return (
    <div className={styles.edit}>
      <OperationPanel className={styles['operation-panel']} />
      <div className={styles['edit-area']}>
        <textarea
          placeholder="标题..."
          spellCheck={false}
        />
        <textarea
          placeholder="内容..."
          spellCheck={false}
        />
      </div>
    </div>
  )
}

export default Edit

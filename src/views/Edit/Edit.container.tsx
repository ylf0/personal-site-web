import React from 'react'

import Button from '@/components/Button'

import styles from './Edit.module.scss'

interface IProps {}

const Edit: React.FC<IProps> = () => {

  return (
    <div className={styles.edit}>
      <span>How are you :)</span>
      <Button
        name="Great Button"
        onClick={() => {}}
      />
    </div>
  )
}

export default Edit

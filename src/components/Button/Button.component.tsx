import * as React from 'react'

import styles from './Button.module.scss'

interface IProps {
  name: string
  type?: 'normal' | 'confirm' | 'danger'
  onClick: Function
}

const Button: React.FunctionComponent<IProps> = (props) => {
  const { name, type, onClick } = props
  return (
    <div className={styles.btn} onClick={() => onClick()}>{name}</div>
  )
}

export default Button

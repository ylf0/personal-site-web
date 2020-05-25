import * as React from 'react'

import styles from './Button.module.scss'

interface IProps {
  name: string
  className?: string
  type?: 'confirm' | 'danger' | 'ghost'
  onClick: Function
}

const Button: React.FunctionComponent<IProps> = (props) => {
  const { name, className, type, onClick } = props
  let cls = type ? `${styles.btn} ${styles[type]}` : styles.btn
  if (className) cls += ` ${className}`
  return (
    <div className={cls} onClick={() => onClick()}>{name}</div>
  )
}

export default Button

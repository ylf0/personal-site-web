import * as React from 'react'

import styles from './Cover.module.scss'

interface IProps {
  coverUrl: string
  title?: string
  desc?: string
  shadowColor?: string
  onClick?: Function
}

const Cover: React.FunctionComponent<IProps> = (props) => {
  const {
    coverUrl,
    title,
    desc,
    onClick,
  } = props

  function handleClick() {
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <div className={styles.cover} onClick={handleClick}>
      <div className={styles['cover-image']} style={{ backgroundImage: `url(${coverUrl})` }}/>
      <div className={styles.info}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <div className={styles.desc}>
          <span>{desc}</span>
        </div>
      </div>
      <div className={styles.shadow}/>
    </div>
  )
}

export default Cover

import React from 'react'

import style from './index.module.scss'

interface IBlogCard {
  title: string
  subTitle: string
}

export default function BlogCard(props: IBlogCard) {
  const { title, subTitle } = props

  return (
    <div className={style['blog-card']}>
      <div>{title}</div>
      <div>{subTitle}</div>
    </div>
  )
}

import React from 'react'

import { defaultBookCover } from '@/constants'

import style from './index.module.scss'

interface IBookCard {
  cover: string
}

export default function BookCard(props: IBookCard) {
  const { cover = defaultBookCover } = props

  return (
    <div className={style['book-card']}>
      <img src={cover} alt="cover"/>
    </div>
  )
}

import React from 'react'

import { defaultMovieCover } from '@/constants'

import style from './index.module.scss'

interface IMovieCard {
  cover: string
}

export default function MovieBlog(props: IMovieCard) {
  const { cover = defaultMovieCover } = props

  return (
    <div className={style['movie-card']}>
      <img src={cover} alt="cover"/>
    </div>
  )
}
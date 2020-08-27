import React from 'react'

import { defaultMusicCover } from '@/constants'

import style from './index.module.scss'

interface IMusicCard {
  cover: string
  name: string
}

export default function MusicCard(props: IMusicCard) {
  const { cover = defaultMusicCover, name } = props

  return (
    <div className={style['music-card']}>
      <div>{name}</div>
      <img src={cover} alt="cover"/>
    </div>
  )
}

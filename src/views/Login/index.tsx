import React, { ChangeEvent, useState } from 'react'

import Button from '@/components/Button'

import style from './index.module.scss'

interface InputProps {
  label: string
  type?: string
  placeholder?: string
  value?: string
  onChange: (value: string) => void
}

const infoSet = {
  login: {
    desc: '登录',
    text: 'Sign In',
  },
  register: {
    desc: '注册',
    text: 'Sign Up',
  },
}

function InputWithLabel(props: InputProps) {
  const { label, type, placeholder, value, onChange } = props

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  return (
    <div className={style['input-with-label']}>
      <div className={style.label}>{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default function Login() {
  const [email, setEmail]       = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [mode, setMode]         = useState<'login' | 'register'>('login')

  function handleInputChange(type: string, value: string) {
    switch (type) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  }

  function getWallClass() {
    return mode === 'login'
      ? style.wall
      : `${style.wall} ${style['wall-right']}`
  }

  function getFormClass() {
    return mode === 'login'
      ? style.form
      : `${style.form} ${style['form-left']}`
  }

  function toggleMode() {
    setMode(mode === 'login' ? 'register' : 'login')
  }

  return (
    <div className={style.login}>
      <div className={getWallClass()}>
        <div>{infoSet[mode].desc}</div>
      </div>
      <div className={getFormClass()}>
        <div className={style.title}>{infoSet[mode].text}</div>
        <InputWithLabel
          label="Email"
          placeholder="Input your email"
          value={email}
          onChange={value => handleInputChange('email', value)}
        />
        <InputWithLabel
          label="Password"
          type="password"
          placeholder="Input your password"
          value={password}
          onChange={value => handleInputChange('password', value)}
        />
        <Button name={infoSet[mode].text} onClick={toggleMode}/>
        <div className={style.tip}>
          No account?
          <span className={style.operation}>Sign Up</span>
        </div>
      </div>
    </div>
  )
}

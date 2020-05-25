import * as React from 'react'

import styles from './Input.module.scss'

interface IProps {
  placeholder: string
  className?: string
  value: string
  size?: 'small' | 'medium' | 'large'
  onChange: Function
}

const Input: React.FunctionComponent<IProps> = (props) => {
  const {
    className,
    placeholder,
    value,
    size = 'medium',
    onChange
  } = props

  let style = {}

  switch (size) {
    case 'small':
      style = { fontSize: '16px', lineHeight: '18px', fontWeight: 500 }
      break
    case 'large':
      style = { fontSize: '24px', lineHeight: '28px' }
      break
    default:
      style = { fontSize: '18px', lineHeight: '24px' }
  }

  return (
    <div className={`${styles['input-area']} ${className}`}>
      <input
        type="text"
        spellCheck={false}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default Input

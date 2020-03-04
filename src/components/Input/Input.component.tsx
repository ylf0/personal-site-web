import * as React from 'react'

import styles from './Input.module.scss'

interface IProps {
  placeholder: string
  className?: string
  onChange: Function
}

const Input: React.FunctionComponent<IProps> = ({ className, placeholder, onChange }) => {
  return (
    <div className={`${styles['input-area']} ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default Input

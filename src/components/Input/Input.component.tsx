import * as React from 'react'

import styles from './Input.module.scss'

interface IProps {
  placeholder: string
  className?: string
  content: string
  onChange: Function
}

const Input: React.FunctionComponent<IProps> = ({ className, placeholder, content, onChange }) => {
  return (
    <div className={`${styles['input-area']} ${className}`}>
      <input
        type="text"
        spellCheck={false}
        placeholder={placeholder}
        value={content}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default Input

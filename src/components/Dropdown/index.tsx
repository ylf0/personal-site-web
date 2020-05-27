import React from 'react'

import styles from './index.module.scss'

interface IItem {
  id: string
  value: string
}

interface IProps {
  visible: boolean
  selectedKey: string
  options: Array<IItem>
  onSelect: (item: IItem) => void
}

const Dropdown: React.FC<IProps> = (props) => {
  const { visible, selectedKey, options, onSelect } = props

  if (!visible) {
    return null
  }

  function getLists() {
    return options.map(option => {
      const { id, value } = option
      const className = id === selectedKey ? `${styles.list} ${styles.selected}` : styles.list
      return (
        <div className={className} onClick={() => onSelect(option)}>
          <span>{value}</span>
        </div>
      )
    })
  }

  return (
    <div className={styles.dropdown}>
      {getLists()}
    </div>
  )
}

export default Dropdown

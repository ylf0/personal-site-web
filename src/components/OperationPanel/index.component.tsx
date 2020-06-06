import React from 'react'

import styles from './index.module.scss'

interface IProps {
  className?: string
  onClick?: (key: string) => void
}

interface IButtonProps {
  id: string
  title: string
  onClick: (id: string) => void
}

const operationLists = [
  { key: 'h1', value: '大标题' },
  { key: 'h2', value: '中标题' },
  { key: 'h3', value: '小标题' },
  { key: 'quote', value: '引用' },
  { key: 'ul', value: '无序列表' },
  { key: 'ol', value: '有序列表' },
  { key: 'bold', value: '加粗' },
  { key: 'italic', value: '斜体' },
  { key: 'underline', value: '下划线' },
  { key: 'line-through', value: '删除线' },
  { key: 'link', value: '链接' },
  { key: 'code', value: '代码' },
  { key: 'align', value: '对齐' },
  { key: 'color', value: '颜色' },
]

const Button: React.FC<IButtonProps> = (props) => {
  const { id, title, onClick } = props

  return (
    <div className={styles['operation-btn']} onClick={() => onClick(id)}>
      <span>{title}</span>
    </div>
  )
}

const OperationPanel: React.FC<IProps> = (props) => {
  const { className, onClick } = props

  function getOperationBtn() {
    return operationLists.map(({ key, value }) => (
      <Button key={key} id={key} title={value} onClick={handleClick} />
    ))
  }

  function handleClick() {
    if (typeof onClick === 'function') {
      onClick('key')
    }
  }

  return (
    <div className={`${styles['operation-panel']} ${className}`}>
      {getOperationBtn()}
    </div>
  )
}

export default OperationPanel

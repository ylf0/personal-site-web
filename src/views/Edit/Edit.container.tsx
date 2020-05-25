import React, { useState } from 'react'
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js'

import OperationPanel from '../../components/OperationPanel/index.component'

import styles from './Edit.module.scss'
import 'draft-js/dist/Draft.css'

interface IProps {}

const Edit: React.FC<IProps> = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  )

  function handleKeyCommand(command: DraftEditorCommand, editorState: EditorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      setEditorState(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  function handleOperationClick(key: string) {
    setEditorState(RichUtils.toggleInlineStyle(editorState, key.toUpperCase()))
  }

  return (
    <div className={styles.edit}>
      <OperationPanel className={styles['operation-panel']} onClick={handleOperationClick} />
      <div className={styles['edit-area']}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  )
}

export default Edit

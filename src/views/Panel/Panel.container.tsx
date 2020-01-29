import * as React from 'react'

import { createArticle } from '../../api/article.api'
import styles from './Panel.module.scss'

interface IState {
  content: any
}

const md = require('markdown-it')()

export default class Panel extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      content: null
    }
    // functions
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    this.createArticle = this.createArticle.bind(this)
  }

  previews: any = null

  handleTextAreaChange (e: any) {
    const { value } = e.target
    this.previews.innerHTML = md.render(value)
    this.setState({ content: value })
  }

  async createArticle() {
    const { content } = this.state
    if (!content) return

    await createArticle(content)
  }

  render () {
    return (
      <div className={styles.container}>
        <main>
          <textarea
            spellCheck={false}
            onChange={this.handleTextAreaChange}
          />
          <div className={styles['preview-area']} ref={(refs) => this.previews = refs}/>
        </main>
        <footer>
          <button onClick={this.createArticle}>保存</button>
        </footer>
      </div>
    )
  }
}

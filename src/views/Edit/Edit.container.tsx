import * as React from 'react'

import { createArticle, getArticles } from '../../api/article.api'

import { Input } from '../../components'

import styles from './Edit.module.scss'

interface IState {
  title: string
  content: string
  defaultContent: string
}

const md = require('markdown-it')()

export default class Edit extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      title: '',
      content: '',
      defaultContent: ''
    }

    this.createArticle = this.createArticle.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
  }

  previews: any = null

  async componentDidMount() {
    const { data } = await getArticles()
    const { result } = data
    this.setState({ defaultContent: result[1].content, title: result[1].title })
    this.previews.innerHTML = md.render(result[1].content)
  }

  handleTextAreaChange (e: any) {
    const { value } = e.target
    this.previews.innerHTML = md.render(value)
    this.setState({ content: value })
  }

  async createArticle() {
    const { title, content } = this.state
    if (!content) return

    await createArticle({ title, content })
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target && typeof e.target.value === 'string') {
      this.setState({ title: e.target.value })
    }
  }

  render () {
    const { defaultContent, title } = this.state
    return (
      <div className={styles.container}>
        <header>
          <Input
            className={styles['left-side']}
            placeholder="输入标题"
            content={title}
            onChange={this.handleInputChange}
          />
          <div className={styles['right-side']}>
            <span>Opreations Area</span>
          </div>
        </header>
        <main>
          <div className={styles['writing-area']}>
            <textarea
              spellCheck={false}
              defaultValue={defaultContent}
              onChange={this.handleTextAreaChange}
            />
          </div>
          <div className={styles['preview-area']} ref={(refs) => this.previews = refs}/>
        </main>
        <footer>
          <div className={styles['save-btn']} onClick={this.createArticle}>保存</div>
        </footer>
      </div>
    )
  }
}

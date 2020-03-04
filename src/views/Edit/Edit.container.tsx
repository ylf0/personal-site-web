import * as React from 'react'

import { createArticle, getArticles } from '../../api/article.api'

import Input from '../../components/Input/Input.component'

import styles from './Edit.module.scss'

interface IState {
  content: any
  defaultContent: string
}

const md = require('markdown-it')()

export default class Panel extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      content: null,
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
    this.setState({ defaultContent: result[4].content })
    this.previews.innerHTML = md.render(result[4].content)
  }

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

  handleInputChange(e: any) {
    console.info(e.target.value)
  }

  render () {
    const { defaultContent } = this.state
    return (
      <div className={styles.container}>
        <header>
          <Input
            className={styles['left-side']}
            placeholder="输入标题"
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
          <button onClick={this.createArticle}>保存</button>
        </footer>
      </div>
    )
  }
}

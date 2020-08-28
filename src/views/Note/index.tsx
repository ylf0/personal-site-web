import * as React from 'react'

import { Cover, Input, Modal } from '../../components'
import { getNoteBook } from '../../api/notebook.api'
import styles from './index.module.scss'

interface IState {
  newNoteName: string
  newNoteDesc: string
  newChapterName: string
  newSectionName: string
  showCreateModal: boolean
  showModifyModal: boolean
  currChoose: any
  noteBooks: any[]
}

export default class Note extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      newNoteName: '',
      newNoteDesc: '',
      newChapterName: '添加章节',
      newSectionName: '',
      showCreateModal: false,
      showModifyModal: false,
      currChoose: null,
      noteBooks: [],
    }

    this.getCreateNoteBody = this.getCreateNoteBody.bind(this)
    this.handleNewNoteName = this.handleNewNoteName.bind(this)
    this.handleNewNoteDesc = this.handleNewNoteDesc.bind(this)

    this.openCreateModal = this.openCreateModal.bind(this)
    this.closeCreateModal = this.closeCreateModal.bind(this)

    this.openModifyModal = this.openModifyModal.bind(this)
    this.closeModifyModal = this.closeModifyModal.bind(this)

    this.getNoteBook = this.getNoteBook.bind(this)
    this.getNoteBookList = this.getNoteBookList.bind(this)
    this.getModifyContent = this.getModifyContent.bind(this)

    this.chooseBook = this.chooseBook.bind(this)
    this.handleNewChapterName = this.handleNewChapterName.bind(this)
    this.handleNewSectionName = this.handleNewSectionName.bind(this)

    this.getChapterLists = this.getChapterLists.bind(this)
  }

  async componentDidMount() {
    await this.getNoteBook()
  }

  async getNoteBook() {
    const { data } = await getNoteBook()
    if (data.noteBooks && data.noteBooks.length) {
      this.setState({ noteBooks: data.noteBooks })
    }
  }

  getCreateNoteBody() {
    const { newNoteName, newNoteDesc } = this.state
    return (
      <div className={styles['create-body']}>
        <div className={styles.form}>
          <span>名称：</span>
          <Input
            placeholder="笔记本名称"
            value={newNoteName}
            onChange={this.handleNewNoteName}
          />
        </div>
        <div className={styles.form}>
          <span>简介：</span>
          <Input
            placeholder="笔记本简介"
            value={newNoteDesc}
            onChange={this.handleNewNoteDesc}
          />
        </div>
      </div>
    )
  }

  handleNewNoteName(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target && typeof e.target.value === 'string') {
      this.setState({ newNoteName: e.target.value })
    }
  }

  handleNewNoteDesc(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target && typeof e.target.value === 'string') {
      this.setState({ newNoteDesc: e.target.value })
    }
  }

  handleNewChapterName(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target && typeof e.target.value === 'string') {
      this.setState({ newChapterName: e.target.value })
    }
  }

  handleNewSectionName(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target && typeof e.target.value === 'string') {
      this.setState({ newSectionName: e.target.value })
    }
  }

  openCreateModal() {
    this.setState({ showCreateModal: true })
  }

  closeCreateModal() {
    this.setState({ showCreateModal: false })
  }

  openModifyModal() {
    this.setState({ showModifyModal: true })
  }

  closeModifyModal() {
    this.setState({ showModifyModal: false })
  }

  getNoteBookList() {
    const { noteBooks } = this.state
    return noteBooks.map(book => (
      <Cover
        key={book._id}
        coverUrl={book.coverUrl}
        title={book.title}
        desc={book.desc}
        onClick={() => this.chooseBook(book)}
      />
    ))
  }

  chooseBook(book: any) {
    this.setState({ currChoose: book, showModifyModal: true })
  }

  getChapterLists(chapters: any) {
    if (!chapters || !chapters.length) {
      return null
    }
    return chapters.map((chapter: any) => (
      <div className={styles.chapter} key={chapter._id}>
        <span className={styles['chapter-name']}>{chapter.name}</span>
      </div>
    ))
  }

  getModifyContent() {
    const { currChoose, newChapterName, newSectionName } = this.state
    if (!currChoose) {
      return null
    }

    const { coverUrl, title, desc, chapters } = currChoose

    return (
      <div className={styles['modify-content']}>
        <div className={styles.left}>
        <Cover
          coverUrl={coverUrl}
          title={title}
          desc={desc}
        />
        </div>
        <div className={styles.right}>
          <Input
            placeholder="添加章节"
            value={newChapterName}
            size="large"
            onChange={this.handleNewChapterName}
          />
          <Input
            placeholder="添加小节"
            value={newSectionName}
            size="small"
            onChange={this.handleNewSectionName}
          />
          <div className={styles['chapter-list']}>
            {this.getChapterLists(chapters)}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { showCreateModal, showModifyModal } = this.state
    return (
      <div className={styles['note-module']}>
        <div className={styles['book-list']}>
          {this.getNoteBookList()}
          <div className={styles.create} onClick={this.openCreateModal}>
            <i className="iconfont icon-plus"/>
          </div>
        </div>
        <Modal
          title="创建笔记本"
          visible={showCreateModal}
          content={this.getCreateNoteBody()}
          onCancel={this.closeCreateModal}
        />
        <Modal
          title="修改笔记本"
          visible={showModifyModal}
          width={776}
          height={548}
          isScale
          bodyStyle={{ padding: '0 20px' }}
          content={this.getModifyContent()}
          onCancel={this.closeModifyModal}
        />
      </div>
    )
  }
}

import * as React from 'react'

interface IProps {
  username: string
}

interface IState {
  lists: Array<{ title: string, isDone: boolean }>
}

export default class TodoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      lists: [],
    }
  }

  getLists() {
    const { lists } = this.state
    const content = lists.map((list, index) => {
      return (
        <div key={index}>
          <span>{list.title}</span>
          <span>{list.isDone ? '✅已' : '⚠️未'}完成</span>
        </div>
      )
    })
    return (
      <div>
        {content}
      </div>
    )
  }

  handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      const { lists } = this.state
      lists.push({ title: e.target.value, isDone: false })
      this.setState({ lists })
      e.target.value = ''
    }
  }

  render() {
    const { username } = this.props
    return (
      <div>
        <h3>Hello, {username}, Here's your todolists:</h3>
        {this.getLists()}
        <input onKeyDown={this.handleKeyDown}/>
      </div>
    )
  }
}

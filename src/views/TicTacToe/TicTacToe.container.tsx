import * as React from 'react'

import './TicTacToe.css'

interface IState {
  currPlayer: string
  boardLists: Array<{ x: number, y: number, player?: string }>
}

export default class TicTacToe extends React.Component<{}, IState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      currPlayer: 'O',
      boardLists: [],
    }

    this.initBoardLists = this.initBoardLists.bind(this)
    this.initBoards = this.initBoards.bind(this)
    this.clickBoard = this.clickBoard.bind(this)
  }

  componentDidMount() {
    this.initBoardLists()
  }

  initBoardLists () {
    const lists = []
    for (let y = 3; y > 0; y --) {
      for (let x = 0; x < 3; x ++) {
        lists.push({ x, y })
      }
    }
    this.setState({ boardLists: lists })
  }

  initBoards () {
    return this.state.boardLists.map((item, index) => (
      <div
        key={index}
        className="board"
        onClick={() => this.clickBoard(index)}
      >
        <span>{item.x}:{item.y} {item.player}</span>
      </div>
    ))
  }

  clickBoard(index: number) {
    const { boardLists, currPlayer } = this.state
    if (!boardLists[index].player) {
      boardLists[index].player = currPlayer
      const nextPlayer = currPlayer === 'O' ? 'X' : 'O'
      this.setState({ boardLists, currPlayer: nextPlayer })
    }
  }

  judgeStatus(chess: { x: number, y: number, player: string }) {
    // limit --> 3:3
    const { x, y, player } = chess
    const { boardLists } = this.state
    const yLevel = 3 - y
    if (yLevel === 0) {
      for (let i = 0; i < 3; i ++) {
        if (boardLists[i].player !== player) return false
      }
    } else if (yLevel === 1) {
      for (let i = 3; i < 6; i ++) {
        if (boardLists[i].player !== player) return false
      }
    } else {
      for (let i = 6; i < 9; i ++) {
        if (boardLists[i].player !== player) return false
      }
    }
    if (x === 0) {
      for (let i = 0; i <= 6; i += 3) {
        if (boardLists[i].player !== player) return false
      }
    } else if (x === 1) {
      for (let i = 1; i <= 7; i += 3) {
        if (boardLists[i].player !== player) return false
      }
    } else {
      for (let i = 2; i <= 8; i += 3) {
        if (boardLists[i].player !== player) return false
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="board-box">
          {this.initBoards()}
        </div>
      </div>
    )
  }
}

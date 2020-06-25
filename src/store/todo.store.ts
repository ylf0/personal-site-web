import { createStore } from 'redux'

interface IState {
  index?: number
  text?: string
  done?: boolean
}

interface IAction extends IState {
  type: string
}

function todo(state: Array<IState> = [], action: IAction) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({ text: action.text, done: false })
    case 'DEL_TODO':
      return state.filter((todo, index) => index !== action.index)
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        return index === action.index
          ? { text: action.text, done: !action.done }
          : todo
      })
    default:
      return state
  }
}

export default createStore(todo)

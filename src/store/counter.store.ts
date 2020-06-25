import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

function counter(state = 0, action: { type: string }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter, applyMiddleware(thunk))

store.subscribe(() => console.info('counter state: ', store.getState()))

export default store

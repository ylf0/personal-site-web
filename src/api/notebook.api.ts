import axios from './agent'

interface INoteBook {
  title: string
  desc: string
  coverUrl?: string
}

export const getNoteBook = () => {
  return axios.get('/notebook')
}

export const createNoteBook = (book: INoteBook) => {
  return axios.post('/notebook', { book })
}

import axios from './agent'

export const createArticle = async (content: string) => {
  return axios.post('/article', { content })
}

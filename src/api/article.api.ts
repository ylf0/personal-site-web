import axios from './agent'

export const createArticle = async (content: string) => {
  return axios.post('/article', { content })
}

export const getArticles = async (search?: string) => {
  let route = '/article'
  if (search) route += `?search=${search}`
  return axios.get(route)
}

import axios from './agent'

interface IArticle {
  title?: string
  content: string
}

export const createArticle = async (content: IArticle) => {
  return axios.post('/article', content)
}

export const getArticles = async (search?: string) => {
  let route = '/article'
  if (search) route += `?search=${search}`
  return axios.get(route)
}

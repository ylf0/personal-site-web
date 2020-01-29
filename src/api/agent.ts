import Axios, { AxiosError } from 'axios'

export type IApiResponseType<T> = {
  success: boolean
  result: T
  message: string
}

const apiAgent = Axios.create({
  baseURL: process.env.baseUrl || 'http://127.0.0.1:3001',
})

apiAgent.interceptors.response.use(
  response => response,
  (error: AxiosError) => Promise.reject(error)
)

export default apiAgent

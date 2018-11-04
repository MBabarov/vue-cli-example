import axios from 'axios'
import { getToken } from '@/auth'

const instance = axios.create({
  baseURL: 'http://localhost:3004/',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
})

export default instance

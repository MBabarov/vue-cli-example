import axios from 'axios'
import * as auth from '@/auth'

const instance = axios.create({
  baseURL: 'http://localhost:3004/',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${auth.getToken()}`
  }
})

export default instance

import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
  },
})

export default api

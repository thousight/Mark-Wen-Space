import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
  },
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('Authorization')
    if (token) {
      config.headers.Authorization = `Bearer ${token}` // eslint-disable-line
    }
    return config
  },
  error => Promise.reject(error),
)

export default api

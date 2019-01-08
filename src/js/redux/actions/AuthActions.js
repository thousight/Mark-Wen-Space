import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from './actionTypes'

import api from '../../utils/api'
import history from '../../utils/history'

export const login = values => async dispatch => {
  dispatch({ type: LOGIN })
  try {
    const res = await api.post('/user/login/email', values)
    localStorage.setItem('Authorization', res.headers.token)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    history.push('/admin')
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error,
    })
  }
}

export const logout = () => {
  localStorage.removeItem('Authorization')
  return {
    type: LOG_OUT,
  }
}

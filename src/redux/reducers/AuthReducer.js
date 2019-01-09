import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  TOKEN_LOGIN,
  TOKEN_LOGIN_SUCCESS,
  TOKEN_LOGIN_FAILURE,
  LOG_OUT,
} from '../actions'

const initialState = {
  loading: false,
  error: null,
  currentUser: null,
}

const AppSettingsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOKEN_LOGIN:
    case LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case TOKEN_LOGIN_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        loading: false,
      }
    case TOKEN_LOGIN_FAILURE:
    case LOGIN_FAILURE:
      console.log(payload)
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case LOG_OUT:
      return initialState
    default:
      return state
  }
}

export default AppSettingsReducer

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from '../actions'

const initialState = {
  loading: false,
  error: null,
  currentUser: null,
}

const AppSettingsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        loading: false,
      }
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

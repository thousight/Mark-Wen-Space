import {
  SIDEBAR_STATE
} from '../actions/actionTypes'

const initialState = {
  isSidebarOpen: false
}

const AppSettingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIDEBAR_STATE:
      return {
        ...state,
        isSidebarOpen: payload
      }
    default:
      return state
  }
}

export default AppSettingsReducer;

import {
  ADMIN_SIDEBAR_STATE,
  SIDEBAR_STATE,
  NAVBAR_SELECTED_ITEM,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  isAdminSidebarOpen: true,
  navbarSelectedItem: 'Home',
}

const AppSettingsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SIDEBAR_STATE:
      return {
        ...state,
        isSidebarOpen: payload,
      }
    case ADMIN_SIDEBAR_STATE:
      return {
        ...state,
        isAdminSidebarOpen: payload,
      }
    case NAVBAR_SELECTED_ITEM:
      return {
        ...state,
        navbarSelectedItem: payload,
      }
    default:
      return state
  }
}

export default AppSettingsReducer

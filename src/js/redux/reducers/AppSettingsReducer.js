import {
  FETCH_STATIC_API,
  SIDEBAR_STATE,
  NAVBAR_SELECTED_ITEM
} from '../actions';

const initialState = {
  isStaticAPIFetched: false,
  isSidebarOpen: false,
  navbarSelectedItem: 'Home'
}

const AppSettingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_STATIC_API:
      return {
        ...state,
        isStaticAPIFetched: payload
      }
    case SIDEBAR_STATE:
      return {
        ...state,
        isSidebarOpen: payload
      }
    case NAVBAR_SELECTED_ITEM:
      return {
        ...state,
        navbarSelectedItem: payload
      }
    default:
      return state
  }
}

export default AppSettingsReducer;

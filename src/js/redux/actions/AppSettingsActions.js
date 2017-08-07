import {
  FETCH_STATIC_API,
  SIDEBAR_STATE,
  NAVBAR_SELECTED_ITEM
} from './actionTypes';

/**
* Set is static API content is fetched or not to remove loading screen or show error message
* @param: payload(boolean)
*/
export const isStaticAPIFetched = (payload) => {
  return {
		type: FETCH_STATIC_API,
		payload
	}
};

/**
* Set sidebar open (true) or not (false)
* @param: payload(boolean)
*/
export const toggleSidebar = (payload) => {
  return {
		type: SIDEBAR_STATE,
		payload
	}
};

/**
* Set navbar currently selected navItem
* @param: payload(String)
*/
export const setNavbarCurrentItem = (payload) => {
  return {
		type: NAVBAR_SELECTED_ITEM,
		payload
	}
};

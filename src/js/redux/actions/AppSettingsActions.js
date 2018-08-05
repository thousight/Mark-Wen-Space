import {
  SIDEBAR_STATE,
  NAVBAR_SELECTED_ITEM
} from './actionTypes'

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

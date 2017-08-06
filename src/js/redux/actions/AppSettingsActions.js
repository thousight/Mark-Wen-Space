import { SIDEBAR_STATE, NAVBAR_SELECTED_ITEM } from './actionTypes';

export const toggleSidebar = (payload) => {
  return {
		type: SIDEBAR_STATE,
		payload
	}
};

export const setNavbarCurrentItem = (payload) => {
  return {
		type: NAVBAR_SELECTED_ITEM,
		payload
	}
};

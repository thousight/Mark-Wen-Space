import { SIDEBAR_STATE } from './actionTypes';

export const toggleSidebar = (payload) => {
  return {
		type: SIDEBAR_STATE,
		payload
	}
};

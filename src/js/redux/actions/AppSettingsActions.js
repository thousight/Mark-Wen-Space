import { SIDEBAR_STATE } from './actionTypes';

// Static values
let isSidebarOpen = false;

export const toggleSidebar = () => {
  return {
		type: SIDEBAR_STATE,
		payload: !this.isSidebarOpen
	}
};

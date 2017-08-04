import { SIDEBAR_STATE } from './actionTypes';

// Static values
let isSidebarOpen = true;

export const toggleSidebar = () => {
  return {
		type: SIDEBAR_STATE,
		payload: !this.isSidebarOpen
	}
};

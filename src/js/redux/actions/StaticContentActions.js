import {
  STATIC_EDU_CONTENT,
  STATIC_EXP_CONTENT,
  STATIC_SKILLS_CONTENT,
  STATIC_PORTFOLIO_CONTENT
} from './actionTypes';

/**
* Set static education content into redux states
* @param: payload(Object)
*/
export const setStaticEDUContent = (payload) => {
  return {
		type: STATIC_EDU_CONTENT,
		payload
	}
};

/**
* Set static experience content into redux states
* @param: payload(Object)
*/
export const setStaticEXPContent = (payload) => {
  return {
		type: STATIC_EXP_CONTENT,
		payload
	}
};

/**
* Set static skills content into redux states
* @param: payload(Object)
*/
export const setStaticSkillsContent = (payload) => {
  return {
		type: STATIC_SKILLS_CONTENT,
		payload
	}
};

/**
* Set static portfolio content into redux states
* @param: payload(Object)
*/
export const setStaticPortfolioContent = (payload) => {
  return {
		type: STATIC_PORTFOLIO_CONTENT,
		payload
	}
};

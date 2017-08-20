import {
  STATIC_EDU_CONTENT,
  STATIC_EXP_CONTENT,
  STATIC_SKILLS_CONTENT,
  STATIC_PORTFOLIO_CONTENT
} from '../actions';

const initialState = {
  eduContent: {},
  expContent: {},
  skillsContent: {},
  portfolioContent: {}
}

const StaticContentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case STATIC_EDU_CONTENT:
      return {
        ...state,
        eduContent: payload
      }
    case STATIC_EXP_CONTENT:
      return {
        ...state,
        expContent: payload
      }
    case STATIC_SKILLS_CONTENT:
      return {
        ...state,
        skillsContent: payload
      }
    case STATIC_PORTFOLIO_CONTENT:
      return {
        ...state,
        portfolioContent: payload
      }
    default:
      return state
  }
}

export default StaticContentReducer;

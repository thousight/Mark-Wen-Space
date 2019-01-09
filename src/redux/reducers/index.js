import { combineReducers } from 'redux'

// Reducers
import AppSettingsReducer from './AppSettingsReducer'
import AuthReducer from './AuthReducer'

const rootReducer = combineReducers({
  appSettings: AppSettingsReducer,
  auth: AuthReducer,
})

export default rootReducer

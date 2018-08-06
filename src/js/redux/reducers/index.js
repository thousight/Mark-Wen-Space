import { combineReducers } from 'redux'

// Reducers
import AppSettingsReducer from './AppSettingsReducer'


const rootReducer = combineReducers({
  appSettings: AppSettingsReducer
})

export default rootReducer

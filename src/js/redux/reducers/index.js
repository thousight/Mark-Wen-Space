import { combineReducers } from 'redux'

// Reducers
import AppSettingsReducer from './AppSettingsReducer'
import StaticContentReducer from './StaticContentReducer'


const rootReducer = combineReducers({
  appSettings: AppSettingsReducer,
  staticContent: StaticContentReducer
})

export default rootReducer

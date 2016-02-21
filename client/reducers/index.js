import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import eaters from './eaters'
import appinfo from './appinfo'

export default combineReducers({
  routing,
  appinfo,
  eaters
})

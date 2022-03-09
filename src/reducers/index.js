import { combineReducers } from 'redux'
import errors from './errors'
import agreement from './agreement'

export default combineReducers({
  errors,
  agreement,
})

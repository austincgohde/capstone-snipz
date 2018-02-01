import { combineReducers } from 'redux';
import user from './auth'
import snippets from './snippets'
import toggles from './toggles'

const rootReducer = combineReducers({
  user,
  snippets,
  toggles
})

export default rootReducer

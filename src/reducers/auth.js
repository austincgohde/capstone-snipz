import {
  SAVE_USER_PENDING,
  SAVE_USER_SUCCESS
} from '../actions/auth'

export default(state = [], action) => {
  switch(action.type) {
    case SAVE_USER_PENDING:
      return state
    case SAVE_USER_SUCCESS:
      return {...action.payload}
    default:
      return state;
  }
}

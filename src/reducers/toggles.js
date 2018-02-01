import {
  INIT_APP_SETTINGS,
  ADD_TOGGLE,
  SHOW_VIEW_TOGGLE,
  BACK_BUTTON,
  EDIT_TOGGLE,
  CANCEL_BUTTON
} from '../actions/toggles'

export default(state = {}, action) => {
  let newState = {...state}
  switch(action.type) {
    case INIT_APP_SETTINGS:
      return action.payload;
    case ADD_TOGGLE:
      newState.addForm = !newState.addForm
      return newState;
    case SHOW_VIEW_TOGGLE:
      newState.showView = action.payload
      return newState;
    case BACK_BUTTON:
      newState.showView = null
      newState.addForm = false
      return newState
    case EDIT_TOGGLE:
      newState.editForm = !newState.editForm
      return newState
    case CANCEL_BUTTON:
      newState.editForm = false
      return newState
    default:
      return state
  }
}

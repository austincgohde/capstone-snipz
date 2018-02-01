import {
  SAVE_SNIPPETS_SUCCESS,
  DEL_SNIPPETS_SUCCESS,
  SAVE_EDIT_SNIPPET
} from '../actions/snippets'

export default(state = [], action) => {
  let newState = [...state]
  switch(action.type) {
    case SAVE_SNIPPETS_SUCCESS:
      return [...state].concat(action.payload)
    case DEL_SNIPPETS_SUCCESS:
      newState.splice(action.payload, 1)
      return [...newState]
    case SAVE_EDIT_SNIPPET:
      newState[action.payload.id] = action.payload.block
      return newState
    default:
      return state
  }
}

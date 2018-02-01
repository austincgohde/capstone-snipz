export const ADD_TOGGLE = "ADD_TOGGLE"
export const SHOW_VIEW_TOGGLE = "SHOW_VIEW_TOGGLE"
export const INIT_APP_SETTINGS = "INIT_APP_SETTINGS"
export const EDIT_TOGGLE = "EDIT_TOGGLE"
export const BACK_BUTTON = "BACK_BUTTON"
export const CANCEL_BUTTON = "CANCEL_BUTTON"

export const addToggle = () => {
  return (dispatch) => {
    dispatch({ type: ADD_TOGGLE })
  }
}

export const viewToggle = (id) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_VIEW_TOGGLE,
      payload: id
    })
  }
}

export const initAppToggles = () => {
  let toggles = {
    addForm: false,
    showView: null,
    editForm: false
  }
  return (dispatch) => {
    dispatch({
      type: INIT_APP_SETTINGS,
      payload: toggles
    })
  }
}

export const goBack = () => {
  return (dispatch) => {
    dispatch({ type: BACK_BUTTON })
  }
}

export const editToggle = () => {
  return (dispatch) => {
    dispatch({ type: EDIT_TOGGLE })
  }
}

export const cancelEdit = () => {
  return (dispatch) => {
    dispatch({ type: CANCEL_BUTTON })
  }
}

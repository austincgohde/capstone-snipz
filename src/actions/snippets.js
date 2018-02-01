export const SAVE_SNIPPETS_SUCCESS = 'SAVE_SNIPPETS_SUCCESS';
export const DEL_SNIPPETS_SUCCESS = 'DEL_SNIPPETS_SUCCESS'
export const SAVE_EDIT_SNIPPET = 'SAVE_EDIT_SNIPPET'

export const saveSnippet = (block) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_SNIPPETS_SUCCESS,
      payload: block
    })
  }
}

export const delSnippet = (id) => {
  return (dispatch) => {
    dispatch({
      type: DEL_SNIPPETS_SUCCESS,
      payload: id
    })
  }
}

export const saveEditSnippet = (block, id) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_EDIT_SNIPPET,
      payload: {
        block,
        id
      }
    })
  }
}

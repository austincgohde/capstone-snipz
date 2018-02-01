import {
  auth,
  provider
} from '../firebase'

export const SAVE_USER_PENDING = 'SAVE_USER_PENDING';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';

export const saveUser = () => {
  return (dispatch) => {
    dispatch({ type: SAVE_USER_PENDING })
      auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: SAVE_USER_SUCCESS,
          payload: result.additionalUserInfo.profile
        })
      })
  }
}

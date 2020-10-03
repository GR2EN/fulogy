import * as actionTypes from './contracts/actionTypes';

export const fetchSaveUser = user => ({
  type: actionTypes.FETCH_SAVE_USER,
  payload: user,
});

export const saveUser = user => ({
  type: actionTypes.SAVE_USER,
  payload: user,
});

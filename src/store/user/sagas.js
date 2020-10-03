import { call, put, takeEvery } from 'redux-saga/effects';

import UserApi from '../../services/api/userApi';
import * as actionTypes from './contracts/actionTypes';
import { saveUser } from './actionCreators';
import { closeConfirmationDialog, openInfoDialog } from '../ui/actionCreators';

function* fetchSaveUserRequest({ payload }) {
  try {
    const user = yield call(UserApi.saveUser, payload);
    localStorage.setItem('user', JSON.stringify(user));
    yield put(saveUser(user));
    yield put(closeConfirmationDialog());
    yield put(openInfoDialog());
  } catch (err) {
    console.log('Something went wrong: ', err);
  }
}

export function* userSaga() {
  yield takeEvery(actionTypes.FETCH_SAVE_USER, fetchSaveUserRequest);
}

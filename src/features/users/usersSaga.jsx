// Path: src/features/users/usersSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { getUsersSuccess, getUsersFailure, getUsersFetch } from './usersSlice';

function* fetchUsersSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users/');
    const users = yield response.json();
    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(getUsersFailure(error.toString()));
  }
}

function* usersSaga() {
  yield takeLatest(getUsersFetch.type, fetchUsersSaga);
}

export default usersSaga;

import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_USERS_FETCH, getUsersSuccess } from '../actions';

// API call function
function fetchUsersFromAPI() {
    return fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json());
}

// Saga to handle fetching users
function* fetchUsers() {
    try {
        const users = yield call(fetchUsersFromAPI);
        yield put(getUsersSuccess(users));
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

export default function* someSaga() {
    yield takeEvery(GET_USERS_FETCH, fetchUsers);
}

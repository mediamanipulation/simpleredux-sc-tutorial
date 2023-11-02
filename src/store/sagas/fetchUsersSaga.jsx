// import { put, takeEvery, call } from 'redux-saga/effects';
// import { GET_USERS_FETCH, getUsersSuccess } from '../actions';

// // API call function
// function fetchUsersFromAPI() {
//     return fetch('https://jsonplaceholder.typicode.com/users/')
//         .then(response => response.json());
// }

// // Saga to handle fetching users
// function* fetchUsers() {
//     try {
//         const users = yield call(fetchUsersFromAPI);
//         yield put(getUsersSuccess(users));
//     } catch (error) {
//         console.error("Error fetching users:", error);
//     }
// }

// export default function* fectUsersSaga() {
//     yield takeEvery(GET_USERS_FETCH, fetchUsers);
// }
// ---------------------------------------------------------------------------------------
// Path: src/store/sagas/fetchUsersSaga.jsx
// refactored to use debounce and cache
import { put, takeLatest, call, select, debounce } from 'redux-saga/effects';
import { GET_USERS_FETCH, getUsersSuccess } from '../actions';

const cache = {
  users: null,
  timestamp: 0,
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Selector to get the users from the Redux store
const selectUsers = state => state.users;

// API call function
function fetchUsersFromAPI() {
  return fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json());
}

// Saga to handle fetching users
function* fetchUsers() {
  try {
    // Check if the users are already available in the cache and still valid
    const now = Date.now();
    if (cache.users && now - cache.timestamp < CACHE_DURATION) {
      console.log('Returning cached users');
      return yield put(getUsersSuccess(cache.users));
    }

    // Check if the users are already in the Redux store
    const usersFromStore = yield select(selectUsers);
    if (usersFromStore && usersFromStore.length > 0) {
      console.log('Returning users from Redux store');
      return yield put(getUsersSuccess(usersFromStore));
    }

    // Fetch users from the API
    const users = yield call(fetchUsersFromAPI);
    cache.users = users; // Update the cache
    cache.timestamp = now; // Update the cache timestamp
    yield put(getUsersSuccess(users));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Root saga with debouncing and takeLatest
export default function* fectUsersSaga() {
  yield debounce(500, GET_USERS_FETCH, fetchUsers); // 500ms debounce
  // If you want to use takeLatest instead of debounce, uncomment the line below
  // yield takeLatest(GET_USERS_FETCH, fetchUsers);
}

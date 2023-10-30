import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions';

function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

function* workGetUsersFetch() {
    try {
        const users = yield call(usersFetch);
        console.log("saga users - ", users);
        yield put({ type: GET_USERS_SUCCESS, users });
    } catch (error) {
        // yield put({ type: GET_USERS_FAILED, error });
        console.error("Error in saga:", error);
    }
}

function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
    // do something
}

export default mySaga;






// import { call, put, takeEvery } from 'redux-saga/effects';
// import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions';

// function usersFetch() {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json());
// }

//  console.log("saga users - ",usersFetch());
// function* workGetUsersFetch() {
//     try {
//         const users = yield call(usersFetch);
//         yield put({ type: GET_USERS_SUCCESS, users });
//     } catch (error) {
//         // yield put({ type: GET_USERS_FAILED, error });
//     }
// }

// function* mySaga() {
//     yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
//     // do something
// }

// export default mySaga;
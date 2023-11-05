// Path: src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import usersReducer from '../features/users/usersSlice';
import usersSaga from '../features/users/usersSaga';

const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
  const store = configureStore({
    reducer: {
      users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(usersSaga);

  export default store;

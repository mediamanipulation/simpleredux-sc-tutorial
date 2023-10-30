import { combineReducers } from 'redux';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  someReducer: someReducer,
});

export default rootReducer;

// import { combineReducers } from '@reduxjs/toolkit';
// import myFirstReducer from './someReducer';

// export default combineReducers({
//   myFirst: myFirstReducer,
//   // ... other reducers
// });

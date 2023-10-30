import { combineReducers } from 'redux';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  someReducer: someReducer,
});

export default rootReducer;


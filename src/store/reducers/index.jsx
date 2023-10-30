import { combineReducers } from 'redux';
import getUserReducer from './getUserReducer';

const rootReducer = combineReducers({
  getUserReducer: getUserReducer,
});

export default rootReducer;


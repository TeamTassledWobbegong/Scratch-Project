import { combineReducers } from 'redux';
import crokReducer from './crokReducer.js';

const reducers = combineReducers({
  crok: crokReducer,
});

export default reducers;

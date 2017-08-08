import { combineReducers } from 'redux';
import habit from './reducer-habit';

const rootReducer = combineReducers({
  habit
});

export default rootReducer;
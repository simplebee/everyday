import { combineReducers } from 'redux';
import habit from './habitReducer';

const rootReducer = combineReducers({
  habit
});

export default rootReducer;

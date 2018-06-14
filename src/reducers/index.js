import { combineReducers } from 'redux';
import habits from './habitReducer';

const rootReducer = combineReducers({
  habits
});

export default rootReducer;

import { FETCH_HABIT } from '../actions/types';

function habit(state = [], action) {
  switch (action.type) {
    case FETCH_HABIT:
      return action.payload;
    default:
      return state;
  }
}

export default habit;
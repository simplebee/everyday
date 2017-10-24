import { FETCH_HABITS, CREATE_HABIT } from '../actions/types';

function habit(state = [], action) {
  switch (action.type) {
    case FETCH_HABITS:
      return action.payload;
    case CREATE_HABIT:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default habit;
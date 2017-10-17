import { FETCH_HABIT, CREATE_HABIT } from '../actions/types';

function habit(state = [], action) {
  switch (action.type) {
    case FETCH_HABIT:
      return action.payload;
    case CREATE_HABIT:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default habit;
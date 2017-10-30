import { FETCH_HABITS, CREATE_HABIT, FETCH_HABIT } from '../actions/types';

function habit(state = [], action) {
  switch (action.type) {
    case FETCH_HABITS:
      return action.payload;
    case CREATE_HABIT:
      return [...state, action.payload];
    case FETCH_HABIT:
      return addOrUpdateHabit(state, action);
    default:
      return state;
  }
}

function addOrUpdateHabit(state, action) {
  const newState = [...state];
  const { payload } = action;
  const index = newState.findIndex(obj => obj._id === payload._id);
  if (index === -1) {
    return [...state, payload];
  } else {
    newState[index] = payload;
    return newState;
  }
}

export default habit;
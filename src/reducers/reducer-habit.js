import { FETCH_HABITS, CREATE_HABIT, FETCH_HABIT, UPDATE_HABIT } from '../actions/types';

function habit(state = [], action) {
  switch (action.type) {
    case FETCH_HABITS:
      return action.payload;
    case CREATE_HABIT:
      return [...state, action.payload];
    case FETCH_HABIT:
      return addOrUpdateItem(state, action);
    case UPDATE_HABIT:
      return updateItem(state, action);
    default:
      return state;
  }
}

function updateItem(state, action) {
  const { payload } = action;
  return state.map(item => {
    if (item._id === payload._id) {
      return payload;
    }
    return item;
  });
}

function addOrUpdateItem(state, action) {
  if (state.length) {
    return updateItem(state, action);
  }
  return [...state, action.payload];
}

export default habit;
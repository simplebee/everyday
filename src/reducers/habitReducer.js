import {
  FETCH_HABITS,
  CREATE_HABIT,
  FETCH_HABIT,
  UPDATE_HABIT,
  DELETE_HABIT,
  ADD_DATAPOINT
} from '../actions/actionTypes';

function habit(state = [], action) {
  switch (action.type) {
    case FETCH_HABITS:
      return action.payload;
    case CREATE_HABIT:
      return addItem(state, action);
    case FETCH_HABIT:
      return addOrUpdateItem(state, action);
    case UPDATE_HABIT:
      return updateItem(state, action);
    case DELETE_HABIT:
      return deleteItem(state, action);
    case ADD_DATAPOINT:
      return state.map(item => {
        if (item._id === action.habitId) {
          return {
            ...item,
            datapoints: addOrUpdateItem(item.datapoints, action)
          };
        }
        return item;
      });
    default:
      return state;
  }
}

function addItem(arr, action) {
  return [...arr, action.payload];
}

function updateItem(arr, action) {
  const { payload } = action;
  return arr.map(item => {
    if (item._id === payload._id) {
      return payload;
    }
    return item;
  });
}

function addOrUpdateItem(arr, action) {
  const findItem = arr.findIndex(item => item._id === action.payload._id);
  if (findItem !== -1) {
    return updateItem(arr, action);
  }
  return addItem(arr, action);
}

function deleteItem(arr, action) {
  return arr.filter(item => item._id !== action.payload._id);
}

export default habit;
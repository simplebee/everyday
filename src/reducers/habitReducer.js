import {
  FETCH_HABITS,
  CREATE_HABIT,
  FETCH_HABIT,
  UPDATE_HABIT,
  DELETE_HABIT,
  ADD_DATAPOINT
} from '../actions/actionTypes';

const intialState = {
  entities: {
    habits: {},
    datapoints: {}
  }
};

function habit(state = intialState, action) {
  switch (action.type) {
    case FETCH_HABITS:
    case CREATE_HABIT:
    case FETCH_HABIT:
      return {
        ...state,
        entities: {
          ...state.entities,
          habits: {
            ...state.entities.habits,
            ...action.payload.entities.habits
          },
          datapoints: {
            ...state.entities.datapoints,
            ...action.payload.entities.datapoints
          }
        }
      };
    case UPDATE_HABIT:
      return updateItem(state, action);
    case DELETE_HABIT:
      return deleteItem(state, action);
    case ADD_DATAPOINT:
      return {
        ...state,
        entities: {
          ...state.entities,
          habits: {
            ...state.entities.habits,
            [action.habitId]: {
              ...state.entities.habits[action.habitId],
              datapoints: [
                ...state.entities.habits[action.habitId].datapoints,
                action.payload.result
              ]
            }
          },
          datapoints: {
            ...state.entities.datapoints,
            ...action.payload.entities.datapoints
          }
        }
      };
    default:
      return state;
  }
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

function deleteItem(arr, action) {
  return arr.filter(item => item._id !== action.payload._id);
}

export default habit;

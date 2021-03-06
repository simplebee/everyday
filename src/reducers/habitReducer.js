import {
  FETCH_HABITS,
  CREATE_HABIT,
  FETCH_HABIT,
  UPDATE_HABIT,
  DELETE_HABIT,
  CREATE_DATAPOINT,
  UPDATE_DATAPOINT,
  DELETE_DATAPOINT
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
      return { entities: action.payload.entities };
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
    case CREATE_HABIT:
    case UPDATE_HABIT:
      return {
        ...state,
        entities: {
          ...state.entities,
          habits: {
            ...state.entities.habits,
            ...action.payload.entities.habits
          }
        }
      };
    case DELETE_HABIT:
      return {
        ...state,
        entities: {
          ...state.entities,
          habits: deleteProp(state.entities.habits, action.habitId),
          datapoints: deleteProp(
            state.entities.datapoints,
            state.entities.habits[action.habitId].datapoints
          )
        }
      };
    case CREATE_DATAPOINT:
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
    case UPDATE_DATAPOINT:
      return {
        ...state,
        entities: {
          ...state.entities,
          datapoints: {
            ...state.entities.datapoints,
            ...action.payload.entities.datapoints
          }
        }
      };
    case DELETE_DATAPOINT:
      return {
        ...state,
        entities: {
          ...state.entities,
          habits: {
            ...state.entities.habits,
            [action.habitId]: {
              ...state.entities.habits[action.habitId],
              datapoints: deleteArrayItem(
                state.entities.habits[action.habitId].datapoints,
                action.datapointId
              )
            }
          },
          datapoints: deleteProp(state.entities.datapoints, action.datapointId)
        }
      };
    default:
      return state;
  }
}

function deleteArrayItem(arr, item) {
  return arr.filter(element => element !== item);
}

// Remove single prop or array of props from an object
function deleteProp(obj, prop) {
  return Object.keys(obj)
    .filter(item => {
      if (Array.isArray(prop)) {
        return prop.indexOf(item) === -1;
      }
      return item !== prop;
    })
    .reduce((acc, curr) => {
      acc[curr] = obj[curr];
      return acc;
    }, {});
}

export default habit;

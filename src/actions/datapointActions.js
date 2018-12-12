import axios from 'axios';
import { ADD_DATAPOINT } from './actionTypes';

export function addDatapoint(habitId, data) {
  return dispatch => {
    axios
      .post(`/api/habit/${habitId}/datapoint`, data)
      .then(response => {
        dispatch({
          type: ADD_DATAPOINT,
          payload: response.data.data,
          habitId: habitId
        });
      })
      .catch(error => console.log(error));
  };
}

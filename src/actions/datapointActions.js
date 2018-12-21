import axios from 'axios';
import { normalize } from 'normalizr';
import { ADD_DATAPOINT } from './actionTypes';
import { datapointSchema } from './habitListSchema';

export function addDatapoint(habitId, data) {
  return dispatch => {
    axios
      .post(`/api/habit/${habitId}/datapoint`, data)
      .then(response => {
        const data = response.data.data;
        const normalizedData = normalize(data, datapointSchema);
        dispatch({
          type: ADD_DATAPOINT,
          payload: normalizedData,
          habitId: habitId
        });
      })
      .catch(error => console.log(error));
  };
}

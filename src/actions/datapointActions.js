import axios from 'axios';
import { normalize } from 'normalizr';
import { CREATE_DATAPOINT, UPDATE_DATAPOINT } from './actionTypes';
import { datapointSchema } from './habitListSchema';

export function createDatapoint(habitId, data) {
  return dispatch => {
    axios
      .post(`/api/habit/${habitId}/datapoint`, data)
      .then(response => {
        const data = response.data.data;
        const normalizedData = normalize(data, datapointSchema);
        dispatch({
          type: CREATE_DATAPOINT,
          payload: normalizedData,
          habitId: habitId
        });
      })
      .catch(error => console.log(error));
  };
}

export function updateDatapoint(habitId, datapointId, data) {
  return dispatch => {
    axios
      .put(`/api/habit/${habitId}/datapoint/${datapointId}`, data)
      .then(response => {
        const data = response.data.data;
        const normalizedData = normalize(data, datapointSchema);
        dispatch({
          type: UPDATE_DATAPOINT,
          payload: normalizedData
        });
      })
      .catch(error => console.log(error));
  };
}

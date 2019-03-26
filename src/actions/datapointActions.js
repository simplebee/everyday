import axios from 'axios';
import { normalize } from 'normalizr';
import { CREATE_DATAPOINT } from './actionTypes';
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

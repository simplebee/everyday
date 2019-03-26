import axios from 'axios';
import { normalize } from 'normalizr';
import { habitListSchema, habitSchema } from './habitListSchema';
import {
  FETCH_HABITS,
  CREATE_HABIT,
  FETCH_HABIT,
  UPDATE_HABIT,
  DELETE_HABIT
} from './actionTypes';

export function fetchHabits() {
  return dispatch => {
    return axios.get('/api/habit').then(response => {
      const data = response.data.data;
      const normalizedData = normalize(data, habitListSchema);
      dispatch({
        type: FETCH_HABITS,
        payload: normalizedData
      });
    });
  };
}

export function createHabit(data) {
  return dispatch => {
    return axios
      .post('/api/habit', data)
      .then(response => {
        const data = response.data.data;
        const normalizedData = normalize(data, habitSchema);
        dispatch({
          type: CREATE_HABIT,
          payload: normalizedData
        });
      })
      .catch(error => console.log(error));
  };
}

export function fetchHabit(habitId) {
  return dispatch => {
    return axios
      .get(`/api/habit/${habitId}`)
      .then(response => {
        const data = response.data.data;
        const normalizedData = normalize(data, habitSchema);
        dispatch({
          type: FETCH_HABIT,
          payload: normalizedData
        });
      })
      .catch(error => console.log(error));
  };
}

export function updateHabit(habitId, data) {
  return dispatch => {
    return axios
      .put(`/api/habit/${habitId}`, data)
      .then(response => {
        const data = response.data.data;
        const normalizedData = normalize(data, habitSchema);
        dispatch({
          type: UPDATE_HABIT,
          payload: normalizedData
        });
      })
      .catch(error => console.log(error));
  };
}

export function deleteHabit(habitId) {
  return dispatch => {
    return axios
      .delete(`/api/habit/${habitId}`)
      .then(response => {
        dispatch({
          type: DELETE_HABIT,
          payload: response.data,
          habitId: habitId
        });
      })
      .catch(error => console.log(error));
  };
}

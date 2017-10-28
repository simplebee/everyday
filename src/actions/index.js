import axios from 'axios'; 
import { FETCH_HABITS, CREATE_HABIT, FETCH_HABIT } from './types';

export function fetchHabits() {
  return (dispatch) => {
    axios.get('/api/habit')
      .then((response) => {
        dispatch({
          type: FETCH_HABITS,
          payload: response.data
        });
      });
  }
}

export function createHabit(data) {
  return (dispatch) => {
    axios.post('/api/habit', data)
      .then((response) => {
        dispatch({
          type: CREATE_HABIT,
          payload: response.data
        });
      })
      .catch((error) => console.log(error));
  }
}

export function fetchHabit(habitId) {
  return (dispatch) => {
    axios.get(`/api/habit/${habitId}`)
      .then((response) => {
        dispatch({
          type: FETCH_HABIT,
          payload: response.data
        });
      })
      .catch((error) => console.log(error));
  }
}
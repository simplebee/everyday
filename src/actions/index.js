import axios from 'axios'; 
import { FETCH_HABIT, CREATE_HABIT } from './types';

export function fetchHabit() {
  return (dispatch) => {
    axios.get('/api/habit')
      .then((response) => {
        dispatch({
          type: FETCH_HABIT,
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
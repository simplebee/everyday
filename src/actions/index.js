import axios from 'axios'; 
import { FETCH_HABIT } from './types';

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
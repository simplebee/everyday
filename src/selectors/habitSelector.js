import { createSelector } from 'reselect';

const habitsSelector = (state, id) => state.habits.entities.habits;
const idSelector = (state, id) => id;

export const habitSelector = createSelector(
  [habitsSelector, idSelector],
  (habits, id) => {
    if (habits.hasOwnProperty(id)) {
      return habits[id];
    } else {
      return null;
    }
  }
);

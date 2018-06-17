import { createSelector } from 'reselect';

const habitsSelector = (state, props) => state.habits;
const idSelector = (state, props) => props.match.params.habitId;

const getHabit = (habits, id) => {
  const index = habits.findIndex(obj => obj._id === id);
  return habits[index];
};

export const habitSelector = createSelector(
  [habitsSelector, idSelector],
  getHabit
);

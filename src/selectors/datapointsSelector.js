import { createSelector } from 'reselect';

const habitSelector = (state, id) => state.habits.entities.habits[id];
const allDatapointsSelector = state => state.habits.entities.datapoints;

export const datapointSelector = createSelector(
  [habitSelector, allDatapointsSelector],
  (habit, allDatapoints) => {
    return habit.datapoints.map(id => {
      return allDatapoints[id];
    });
  }
);

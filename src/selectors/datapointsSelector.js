import { createSelector } from 'reselect';
import { habitSelector } from './habitSelector';

const allDatapointsSelector = state => state.habits.entities.datapoints;

export const datapointSelector = createSelector(
  [habitSelector, allDatapointsSelector],
  (habit, allDatapoints) => {
    return habit.datapoints.map(id => {
      return allDatapoints[id];
    });
  }
);

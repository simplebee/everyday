import { createSelector } from 'reselect';
import { habitSelector } from './habitSelector';

const allDatapointsSelector = state => state.habits.entities.datapoints;

export const datapointSelector = createSelector(
  [habitSelector, allDatapointsSelector],
  (habit, allDatapoints) => {
    if (!habit || !habit.datapoints) {
      return null;
    } else {
      return habit.datapoints
        .filter(id => allDatapoints.hasOwnProperty(id))
        .map(id => allDatapoints[id]);
    }
  }
);

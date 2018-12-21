import { createSelector } from 'reselect';
import moment from 'moment';
import { datapointSelector } from './datapointsSelector';
import { habitSelector } from './habitSelector';

const getGoalTotal = (datapoint, habit) => {
  let datapointArray = [];
  switch (habit.frequency) {
    case 'daily':
      datapointArray = datapoint.filter(datapoint => {
        return moment(datapoint.date).isSame(moment(), 'day');
      });
      break;
    case 'weekly':
      // use isoweek(), start of the week is Mon
      // week() is locale aware, for locale 'en', start of week is Sun
      datapointArray = datapoint.filter(datapoint => {
        const datapointIsoWeek = moment(datapoint.date).isoWeek();
        const nowIsoWeek = moment().isoWeek();
        return datapointIsoWeek === nowIsoWeek;
      });
      break;
    case 'monthly':
      datapointArray = datapoint.filter(datapoint => {
        return moment(datapoint.date).isSame(moment(), 'month');
      });
      break;
    default:
      break;
  }

  const sum = datapointArray.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  return sum;
};

export const goalTotalSelector = createSelector(
  [datapointSelector, habitSelector],
  getGoalTotal
);

export const makeGoalTotalSelector = () => {
  return goalTotalSelector;
};

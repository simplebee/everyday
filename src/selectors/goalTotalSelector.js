import { createSelector } from 'reselect';
import moment from 'moment';

const habitSelector = (state, props) => props.habit;

const getGoalTotal = (habit) => {
  let habitArray = [];
  switch (habit.frequency) {
    case 'daily':
      habitArray = habit.datapoints.filter(datapoint => {
        return moment(datapoint.date).isSame(moment(), 'day');
      });
      break;
    case 'weekly':
      // use isoweek(), start of the week is Mon
      // week() is locale aware, for locale 'en', start of week is Sun
      habitArray = habit.datapoints.filter(datapoint => {
        const datapointIsoWeek = moment(datapoint.date).isoWeek();
        const nowIsoWeek = moment().isoWeek()
        return datapointIsoWeek === nowIsoWeek;
      });
      break;
    case 'monthly':
      habitArray = habit.datapoints.filter(datapoint => {
        return moment(datapoint.date).isSame(moment(), 'month');
      });
      break;
    default:
      break;
  }

  const sum = habitArray.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  return sum;
}

export const goalTotalSelector = createSelector(
  [habitSelector],
  getGoalTotal
); 

export const makeGoalTotalSelector = () => {
  return goalTotalSelector;
};
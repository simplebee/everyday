import { createSelector } from 'reselect';
import moment from 'moment';
import { datapointSelector } from './datapointsSelector';

const dateSelector = (state, id, date) => date;

const getDatapointDayTotal = (datapoints, date) => {
  let arr = datapoints.filter(datapoint => {
    return moment(datapoint.date).isSame(date, 'day');
  });

  return arr.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);
};

export const datapointDayTotalSelector = createSelector(
  [datapointSelector, dateSelector],
  getDatapointDayTotal
);

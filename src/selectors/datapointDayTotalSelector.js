import { createSelector } from 'reselect';
import moment from 'moment';
import { datapointSelector } from './datapointsSelector';

const dateSelector = (state, id, date) => date;

const getDatapointDayTotal = (datapoints, date) => {
  if (datapoints) {
    let arr = datapoints.filter(datapoint => {
      return moment(datapoint.date).isSame(date, 'day');
    });
    return arr.reduce((acc, cur) => acc + cur.value, 0);
  } else {
    return null;
  }
};

export const datapointDayTotalSelector = createSelector(
  [datapointSelector, dateSelector],
  getDatapointDayTotal
);

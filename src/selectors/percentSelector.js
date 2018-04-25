import { createSelector } from 'reselect';
import { goalTotalSelector } from './index';

const goalValueSelector = (state, props) => props.habit.goalValue;

const getPercent = (goalTotal, goalValue) => {
  let percent = (goalTotal / goalValue) * 100;
  if (percent > 100) percent = 100;
  return percent;
}

export const percentSelector = createSelector(
  [goalTotalSelector, goalValueSelector],
  getPercent
);

export const makePercentSelector = () => {
  return percentSelector;
};
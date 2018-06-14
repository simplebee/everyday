import propTypes from 'prop-types';

export const habitPropTypes = propTypes.shape({
  _id: propTypes.string.isRequired,
  datapoints: propTypes.array.isRequired,
  frequency: propTypes.string.isRequired,
  goalValue: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  startDate: propTypes.string.isRequired
}).isRequired;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { datapointDayTotalSelector } from '../selectors';

class CalendarDay extends Component {
  static propTypes = {
    day: propTypes.object.isRequired,
    habitId: propTypes.string.isRequired,
    datapointDayTotal: propTypes.number
  };

  render() {
    const date = this.props.day.getDate();
    return (
      <div>
        {date}
        <div>
          {this.props.datapointDayTotal ? this.props.datapointDayTotal : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    datapointDayTotal: datapointDayTotalSelector(
      state,
      props.habitId,
      props.day
    )
  };
};

export default connect(mapStateToProps)(CalendarDay);

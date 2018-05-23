import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { fetchHabit } from '../actions/habitActions';

class Calendar extends Component {
  componentDidMount() {
    const { habitId } = this.props.match.params;
    this.props.fetchHabit(habitId);
  }

  renderValue(day) {
    if (!this.props.habit) return;

    const { datapoints } = this.props.habit;
    day.setHours(0, 0, 0, 0); // 'day' is originally set at local time 12pm
    const datapoint = datapoints.find(datapoint => {
      const datapointDate = moment(datapoint.date).toDate(); // moment() to create local date. Not using new Date('string'), as it returns UTC date
      return datapointDate.getTime() === day.getTime();
    });
    if (datapoint) return <div>{datapoint.value}</div>;
  }

  renderDay = day => {
    const date = day.getDate();
    return (
      <div>
        {date}
        <div>{this.renderValue(day)}</div>
      </div>
    );
  };

  render() {
    return <DayPicker month={new Date()} renderDay={this.renderDay} />;
  }
}

function mapStateToProps(state, ownProps) {
  const { habitId } = ownProps.match.params;
  const { habit } = state;
  const index = habit.findIndex(obj => obj._id === habitId);
  return { habit: habit[index] };
}

const mapDispatchToProps = { fetchHabit };

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
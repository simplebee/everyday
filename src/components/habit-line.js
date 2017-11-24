import React, { Component } from 'react';
import HabitCircle from './habit-circle';
import moment from 'moment';

class HabitLine extends Component {

  getDatapoint(date) {
    const { datapoints } = this.props.habit;
    return datapoints.find((datapoint) => {
      return moment(datapoint.date).isSame(date);
    });
  }

  renderWeek() {
    const arr = [];
    for (var i = 1; i < 8; i++) {
      const date = moment().isoWeekday(i).startOf('date');
      const datapoint = this.getDatapoint(date);
      arr.push(
        <HabitCircle
          habit={this.props.habit}
          date={date}
        >
          <div>{date.format('D')}</div>
          <div>{datapoint && datapoint.value}</div>
        </HabitCircle>
      );
    }
    return arr;
  }

  render() {
    return (
      <div>
        {this.renderWeek()}
      </div>
    );
  }
}

export default HabitLine;
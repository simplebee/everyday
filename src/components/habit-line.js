import React, { Component } from 'react';
import HabitCircle from './habit-circle';
import moment from 'moment';

class HabitLine extends Component {

  getDatapointValue(date) {
    const findDatapoint = this.props.datapoints.find((datapoint) => {
      return moment(datapoint.date).isSame(date);
    });
    if (findDatapoint) return findDatapoint.value;
  }

  renderWeek() {
    const arr = [];
    for (var i = 1; i < 8; i++) {
      const date = moment().isoWeekday(i).startOf('date');
      arr.push(
        <HabitCircle>
          <div>{date.format('D')}</div>
          <div>{this.getDatapointValue(date)}</div>
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
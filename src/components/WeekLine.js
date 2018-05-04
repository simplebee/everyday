import React, { Component } from 'react';
import DayCircle from './DayCircle';
import moment from 'moment';

class WeekLine extends Component {
  getDatapoint(date) {
    const { datapoints } = this.props.habit;
    return datapoints.find(datapoint => {
      return moment(datapoint.date).isSame(date);
    });
  }

  renderWeek() {
    const arr = [];
    for (var i = 1; i < 8; i++) {
      const date = moment()
        .isoWeekday(i)
        .startOf('date');
      const datapoint = this.getDatapoint(date);
      arr.push(
        <DayCircle key={i} habit={this.props.habit} date={date}>
          <div>{date.format('D')}</div>
          <div>{datapoint && datapoint.value}</div>
        </DayCircle>
      );
    }
    return arr;
  }

  render() {
    return <div>{this.renderWeek()}</div>;
  }
}

export default WeekLine;

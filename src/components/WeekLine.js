import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

import DayCircle from './DayCircle';
import { habitPropTypes, datapointPropTypes } from '../lib/propTypesValues';

class WeekLine extends Component {
  static propTypes = {
    habit: habitPropTypes,
    datapoints: propTypes.arrayOf(datapointPropTypes).isRequired
  };

  getDatapoint(date) {
    const { datapoints } = this.props;
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

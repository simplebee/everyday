import React, { Component } from 'react';
import moment from 'moment';

import DayCircle from './DayCircle';
import { habitPropTypes } from '../lib/propTypesValues';

class WeekLine extends Component {
  static propTypes = {
    habit: habitPropTypes
  };

  renderWeek() {
    const arr = [];
    for (var i = 1; i < 8; i++) {
      const date = moment()
        .isoWeekday(i)
        .startOf('date');
      arr.push(
        <DayCircle key={i} habit={this.props.habit} date={date}>
          <div>{date.format('D')}</div>
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

import React, { Component } from 'react';
import HabitCircle from './habit-circle';
import moment from 'moment';

class HabitLine extends Component {

  renderWeek() {
    const arr = [];
    for (var i = 1; i < 8; i++) {
      arr.push(
        <HabitCircle>
          <div>{moment().isoWeekday(i).format('D')}</div>
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
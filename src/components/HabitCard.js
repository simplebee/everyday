import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Card } from 'antd';

import WeekLine from './WeekLine';
import GoalTracker from './GoalTracker';
import { habitPropTypes } from '../lib/propTypesValues';

class HabitCard extends Component {
  static propTypes = {
    habit: habitPropTypes
  };

  render() {
    const { habit, match } = this.props;

    return (
      <Card title={<Link to={`${match.url}/${habit._id}`}>{habit.name}</Link>}>
        <GoalTracker habit={habit} />
        <WeekLine habit={habit} />
      </Card>
    );
  }
}

export default withRouter(HabitCard);

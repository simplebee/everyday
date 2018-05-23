import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Card } from 'antd';

import WeekLine from './WeekLine';
import GoalTracker from './GoalTracker';

const HabitCard = props => {
  const { habit, match } = props;

  return (
    <Card title={<Link to={`${match.url}/${habit._id}`}>{habit.name}</Link>}>
      <GoalTracker habit={habit} />
      <WeekLine habit={habit} />
    </Card>
  );
};

export default withRouter(HabitCard);

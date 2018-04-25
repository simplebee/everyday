import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import WeekLine from './WeekLine';
import GoalTracker from './GoalTracker';

const HabitCard = (props) => {

  const { habit } = props;

  return (
    <Card title={<Link to={'/' + habit._id}>{habit.name}</Link>}>
      <GoalTracker habit={habit}/>
      <WeekLine habit={habit} />
    </Card>
  );
};

export default HabitCard;
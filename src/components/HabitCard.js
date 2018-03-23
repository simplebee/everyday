import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import WeekLine from './WeekLine';

const HabitCard = (props) => {

  const { habit } = props;
  const { Meta } = Card;

  return (
    <Card>
      <Meta
        title={<Link to={'/' + habit._id}>{habit.name}</Link>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <WeekLine habit={habit} />
    </Card>
  );
};

export default HabitCard;
import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import HabitLine from './habit-line';

const HabitCard = (props) => {

  const { habit } = props;

  return (
    <Card>
      <Link to={'/' + habit._id}>
        <CardTitle title={habit.name} />
      </Link>
      <HabitLine habit={habit} />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  );
};

export default HabitCard;
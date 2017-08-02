import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import HabitLine from './habit-line';

const HabitCard = () => (
  <Card>
    <CardTitle title="Card title" />
    <HabitLine />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default HabitCard;
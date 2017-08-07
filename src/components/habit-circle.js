import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 50,
  width: 50,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const HabitCircle = (props) => (
  <Paper style={style} zDepth={1} circle={true}>
    {props.children}
  </Paper>
);

export default HabitCircle;
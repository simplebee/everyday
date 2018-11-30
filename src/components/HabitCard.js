import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Card } from 'antd';

import WeekLine from './WeekLine';
import GoalTracker from './GoalTracker';
import { habitPropTypes } from '../lib/propTypesValues';

import { datapointSelector } from '../selectors';

class HabitCard extends Component {
  static propTypes = {
    habit: habitPropTypes,
    id: propTypes.string.isRequired
  };

  render() {
    const { habit, match } = this.props;

    return (
      <Card title={<Link to={`${match.url}/${habit._id}`}>{habit.name}</Link>}>
        <GoalTracker habit={habit} />
        <WeekLine habit={habit} datapoints={this.props.datapoints} />
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { datapoints: datapointSelector(state, props.id) };
};

export default withRouter(connect(mapStateToProps)(HabitCard));

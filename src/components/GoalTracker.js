import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeGoalTotalSelector, makePercentSelector } from '../selectors';
import { Progress } from 'antd';

class GoalTracker extends Component {

  render() {
    return (
      <div>
        <div>{this.props.habit.frequency}</div>
        <div>{this.props.goalTotal}/{this.props.habit.goalValue}</div>
        <Progress percent={this.props.percent} />
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const goalTotalSelector = makeGoalTotalSelector();
  const percentSelector = makePercentSelector();
  const mapStateToProps = (state, props) => {
    return {
      goalTotal: goalTotalSelector(state, props),
      percent: percentSelector(state, props)
    };
  };
  return mapStateToProps;
}

export default connect(makeMapStateToProps)(GoalTracker);
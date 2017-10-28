import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHabit } from '../actions';

class HabitShow extends Component {
  
  componentDidMount() {
    const { habitId } = this.props.match.params;
    this.props.fetchHabit(habitId);
  }

  render() {
    return (
      <div>{this.props.match.params.habitId}</div>
    );
  }
}

const mapDispatchToProps = {
  fetchHabit
};

export default connect(null, mapDispatchToProps)(HabitShow);
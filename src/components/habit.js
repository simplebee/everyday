import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HabitCard from './habit-card';
import { fetchHabit } from '../actions';

class Habit extends Component {
  
  componentDidMount() {
    this.props.fetchHabit();
  }

  render() {
    return (
      <div>
        <HabitCard />
        {JSON.stringify(this.props.habit)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { habit: state.habit };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHabit }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Habit);
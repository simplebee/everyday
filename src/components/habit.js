import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HabitCard from './habit-card';
import { fetchHabit } from '../actions';
import _ from 'lodash';

class Habit extends Component {
  
  componentDidMount() {
    this.props.fetchHabit();
  }

  renderList() {
    return _.map(this.props.habit, (habit) => {
      return (
        <HabitCard
          key={habit.id}
          title={habit.name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
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
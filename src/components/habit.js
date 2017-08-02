import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HabitCard from './habit-card';

class Habit extends Component {

  render() {
    return (
      <div>
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Habit);
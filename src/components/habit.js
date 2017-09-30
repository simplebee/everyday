import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HabitCard from './habit-card';
import { fetchHabit } from '../actions';

import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Habit extends Component {
  
  componentDidMount() {
    this.props.fetchHabit();
  }
  
  renderList() {
    return this.props.habit.map((habit) => {
      return (
        <HabitCard
          key={habit.id}
          title={habit.name}
          datapoints={habit.datapoints}
        />
      );
    });
  }
  
  render() {
    return (
      <div>
        <Link to="/new">
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
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
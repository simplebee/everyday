import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import HabitCard from './HabitCard';
import { fetchHabits } from '../actions/habitActions';
import { Button } from 'antd';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchHabits();
  }

  renderList() {
    return this.props.habit.map(habit => {
      return <HabitCard key={habit._id} habit={habit} />;
    });
  }

  render() {
    return (
      <div>
        <Link to="/new">
          <Button type="primary" icon="plus">
            Add habit
          </Button>
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
  return bindActionCreators({ fetchHabits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

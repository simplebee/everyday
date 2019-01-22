import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import EditHabitForm from './EditHabitForm';
import { fetchHabit, editHabit } from '../actions/habitActions';
import { habitSelector } from '../selectors';
import { habitPropTypes } from '../lib/propTypesValues';

class EditHabitPage extends Component {
  static propTypes = {
    habit: habitPropTypes,
    fetchHabit: propTypes.func.isRequired,
    editHabit: propTypes.func.isRequired
  };

  state = {
    name: '',
    goalValue: 1,
    frequency: 'daily'
  };

  componentDidMount() {
    const { habitId } = this.props.match.params;
    this.props.fetchHabit(habitId);
  }

  componentWillReceiveProps(nextProps) {
    const { habit } = nextProps;

    if (habit) {
      this.setState({
        name: habit.name,
        goalValue: habit.goalValue,
        frequency: habit.frequency
      });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const { habitId } = this.props.match.params;
    const { name, goalValue, frequency } = this.state;
    const data = {
      name,
      goalValue: Number(goalValue),
      frequency
    };
    event.preventDefault();
    this.props
      .editHabit(habitId, data)
      .then(() => this.props.history.push('/app'))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <EditHabitForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { habit: habitSelector(state, ownProps.match.params.habitId) };
}

const mapDispatchToProps = {
  fetchHabit,
  editHabit
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHabitPage);

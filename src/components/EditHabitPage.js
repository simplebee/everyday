import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditHabitForm from './EditHabitForm'
import { fetchHabit, editHabit } from '../actions/habitActions';

class EditHabitPage extends Component {

  state = {
    name: '',
    goalValue: '',
    frequency: 'daily'
  }

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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const { habitId } = this.props.match.params;
    const { name, goalValue, frequency } = this.state;
    const data = {
      name,
      goalValue: Number(goalValue),
      frequency
    };
    event.preventDefault();
    this.props.editHabit(habitId, data)
      .then(() => this.props.history.push('/'))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <EditHabitForm
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
};

function mapStateToProps(state, ownProps) {
  const { habitId } = ownProps.match.params;
  const { habit } = state;
  const findHabit = habit.find(obj => obj._id === habitId);
  return { habit: findHabit };
};

const mapDispatchToProps = {
  fetchHabit,
  editHabit
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHabitPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import moment from 'moment';

import NewHabitForm from './NewHabitForm';
import { createHabit } from '../actions/habitActions';

class NewHabitPage extends Component {
  static propTypes = {
    createHabit: propTypes.func.isRequired
  };

  state = {
    name: '',
    startDate: moment(),
    endDate: moment().add(7, 'days'),
    goalValue: 1,
    frequency: 'daily'
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDatePickerChange = name => date => {
    this.setState({
      [name]: date
    });
  };

  handleSubmit = event => {
    const { name, startDate, endDate, goalValue, frequency } = this.state;
    const data = {
      name,
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
      goalValue: goalValue,
      frequency
    };
    this.props.createHabit(data);
    event.preventDefault();
    this.props.history.push('/app');
  };

  render() {
    return (
      <div>
        <NewHabitForm
          {...this.state}
          handleChange={this.handleChange}
          handleDatePickerChange={this.handleDatePickerChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { createHabit };

export default connect(
  null,
  mapDispatchToProps
)(NewHabitPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createHabit } from '../actions/habitActions';
import NewHabitForm from './NewHabitForm';
import moment from 'moment';

class NewHabitPage extends Component {
  state = {
    name: '',
    startDate: moment(),
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
    const { name, startDate, goalValue, frequency } = this.state;
    const data = {
      name,
      startDate: startDate.format('YYYY-MM-DD'),
      goalValue: goalValue,
      frequency
    };
    this.props.createHabit(data);
    event.preventDefault();
    this.props.history.push('/');
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createHabit }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewHabitPage);

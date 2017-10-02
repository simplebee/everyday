import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createHabit } from '../actions';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';

class Habit extends Component {
  
  state = {
    name: '',
    startDate: null,
    endDate: null,
    timesPerDay: '',
    frequency: 'daily',
    timesPerWeek: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDatePickerChange = (name) => (event, date) => {
    this.setState({
      [name]: date
    });
  }
  
  handleSelectFieldChange = (name) => (event, index, value) => {
    this.setState({
      [name]: value,
      timesPerWeek: ''
    });
  }

  handleSubmit = (event) => {
    const { name, startDate, endDate, timesPerDay, frequency, timesPerWeek } = this.state;
    const data = {
      name,
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
      timesPerDay,
      frequency,
      timesPerWeek
    }
    this.props.createHabit(data);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField 
            floatingLabelText="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <DatePicker
            floatingLabelText="Start date"
            container="inline"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleDatePickerChange('startDate')}
          />
          <DatePicker
            floatingLabelText="End date"
            container="inline"
            name="endDate"
            value={this.state.endDate}
            onChange={this.handleDatePickerChange('endDate')}
          />
          <TextField 
            floatingLabelText="Times per day"
            name="timesPerDay"
            type="number"
            value={this.state.timesPerDay}
            onChange={this.handleChange}
          />
          <br />
          <SelectField
            floatingLabelText="Frequency"
            name="frequency"
            value={this.state.frequency}
            onChange={this.handleSelectFieldChange('frequency')}
          >
            <MenuItem value={'daily'} primaryText="Daily" />
            <MenuItem value={'weekly'} primaryText="Weekly" />
          </SelectField>
          <br />
          <TextField 
            floatingLabelText="Times per week"
            name="timesPerWeek"
            type="number"
            value={this.state.timesPerWeek}
            onChange={this.handleChange}
            disabled={this.state.frequency === 'daily'}
          />
          <br />
          <RaisedButton label="Submit" type="submit" />
          <RaisedButton label="Cancel" type="button" />
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createHabit }, dispatch);
}

export default connect(null, mapDispatchToProps)(Habit);
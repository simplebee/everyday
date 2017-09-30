import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createHabit } from '../actions';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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

  handleDatePickerChange = (type) => (event, date) => {
    this.setState({
      [type]: date
    });
  }
  
  handleSelectFieldChange = (type) => (event, index, value) => {
    this.setState({
      [type]: value
    });
  }

  handleSubmit = (event) => {
    const { name, startDate, endDate, timesPerDay, frequency, timesPerWeek } = this.state;
    const data = {
      name,
      startDate,
      endDate,
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
          {
            this.state.frequency === 'weekly' ? 
              (<TextField 
                floatingLabelText="Times per week"
                name="timesPerWeek"
                type="number"
                value={this.state.timesPerWeek}
                onChange={this.handleChange}
              />) : null
          }
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
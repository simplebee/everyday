import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

function HabitForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <TextField 
          floatingLabelText="Name"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
        <DatePicker
          floatingLabelText="Start date"
          container="inline"
          name="startDate"
          value={props.startDate}
          onChange={props.handleDatePickerChange('startDate')}
        />
        <DatePicker
          floatingLabelText="End date"
          container="inline"
          name="endDate"
          value={props.endDate}
          onChange={props.handleDatePickerChange('endDate')}
        />
        <TextField 
          floatingLabelText="Times per day"
          name="timesPerDay"
          type="number"
          value={props.timesPerDay}
          onChange={props.handleChange}
        />
        <br />
        <SelectField
          floatingLabelText="Frequency"
          name="frequency"
          value={props.frequency}
          onChange={props.handleSelectFieldChange('frequency')}
        >
          <MenuItem value={'daily'} primaryText="Daily" />
          <MenuItem value={'weekly'} primaryText="Weekly" />
        </SelectField>
        <br />
        <TextField 
          floatingLabelText="Times per week"
          name="timesPerWeek"
          type="number"
          value={props.timesPerWeek}
          onChange={props.handleChange}
          disabled={props.frequency === 'daily'}
        />
        <br />
        <RaisedButton label="Submit" type="submit" />
        <RaisedButton label="Cancel" type="button" />
      </div>
    </form>
  );
}

export default HabitForm;
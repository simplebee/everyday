import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

function EditForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <TextField 
          floatingLabelText="Name"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
        <br />
        <TextField 
          floatingLabelText="Goal value"
          name="goalValue"
          type="number"
          value={props.goalValue}
          onChange={props.handleChange}
        />
        <br />
        <SelectField
          floatingLabelText="Frequency"
          name="frequency"
          value={props.frequency}
          onChange={props.handleSelectFieldChange('frequency')}
        >
          <MenuItem value={'daily'} primaryText="Per day" />
          <MenuItem value={'weekly'} primaryText="Per week" />
          <MenuItem value={'monthly'} primaryText="Per month" />
        </SelectField>
        <br />
        <RaisedButton label="Submit" type="submit" />
        <RaisedButton label="Cancel" type="button" />
      </div>
    </form>
  );
}

export default EditForm;
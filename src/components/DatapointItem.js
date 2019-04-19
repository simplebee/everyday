import React, { Component } from 'react';
import propTypes from 'prop-types';
import { List, Button, Form, Input, DatePicker } from 'antd';
import moment from 'moment';
import { datapointPropTypes } from '../lib/propTypesValues';

class DatapointItem extends Component {
  static propTypes = {
    datapoint: datapointPropTypes,
    habitId: propTypes.string.isRequired,
    updateDatapoint: propTypes.func.isRequired,
    deleteDatapoint: propTypes.func.isRequired
  };

  state = {
    date: moment(this.props.datapoint.date),
    value: this.props.datapoint.value
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

  handleEditClick = event => {
    const { habitId, datapoint } = this.props;
    const data = {
      date: this.state.date.toDate(),
      value: Number(this.state.value)
    };
    this.props.updateDatapoint(habitId, datapoint._id, data);
  };

  handleDeleteClick = event => {
    const { habitId, datapoint } = this.props;
    this.props.deleteDatapoint(habitId, datapoint._id);
  };

  render() {
    return (
      <List.Item>
        <Form layout="inline">
          <Form.Item>
            <DatePicker
              name="date"
              value={this.state.date}
              onChange={this.handleDatePickerChange('date')}
            />
          </Form.Item>
          <Form.Item>
            <Input
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
              type="number"
            />
          </Form.Item>
          <Form.Item>
            <span style={{ float: 'left' }}>
              <Button onClick={this.handleEditClick}>edit</Button>
              <Button onClick={this.handleDeleteClick}>delete</Button>
            </span>
          </Form.Item>
        </Form>
      </List.Item>
    );
  }
}

export default DatapointItem;

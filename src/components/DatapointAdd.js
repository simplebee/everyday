import React, { Component } from 'react';
import { Button, Form, Input, DatePicker } from 'antd';
import moment from 'moment';

class DatapointsAdd extends Component {
  state = {
    value: 0,
    date: moment()
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDatePickerChange = name => date => {
    this.setState({ [name]: date });
  };

  handleSubmit = event => {
    const { value, date } = this.state;
    const { _id } = this.props.habit;
    const data = {
      date: date.format('YYYY-MM-DD'),
      value
    };

    event.preventDefault();
    this.props.createDatapoint(_id, data);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          <DatePicker
            name="date"
            value={this.state.date}
            onChange={this.handleDatePickerChange('date')}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            name="value"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form.Item>
        <Button htmlType="submit">Add datapoint</Button>
      </Form>
    );
  }
}

export default DatapointsAdd;

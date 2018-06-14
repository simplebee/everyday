import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Popover, Button, InputNumber } from 'antd';

import { addDatapoint } from '../actions/datapointActions';
import { habitPropTypes } from '../lib/propTypesValues';

class DayCircle extends Component {
  static propTypes = {
    addDatapoint: propTypes.func.isRequired,
    habit: habitPropTypes,
    date: propTypes.object.isRequired
  };

  state = {
    datapointValue: 1
  };

  handleInputNumberChange = value => {
    this.setState({
      datapointValue: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { datapointValue } = this.state;
    const { _id } = this.props.habit;
    const dateStr = this.props.date.format('YYYY-MM-DD');
    const data = {
      date: dateStr,
      value: datapointValue
    };
    this.props.addDatapoint(_id, data);
  };

  render() {
    const content = (
      <div style={{ margin: 5 }}>
        <form onSubmit={this.handleSubmit}>
          <InputNumber
            value={this.state.datapointValue}
            onChange={this.handleInputNumberChange}
          />
          <Button htmlType="submit" type="primary" icon="plus">
            Add
          </Button>
        </form>
      </div>
    );

    return (
      <div className="day-circle">
        <Popover
          content={content}
          trigger="click"
          placement="bottomLeft"
          arrowPointAtCenter
        >
          <div className="day-circle__circle">{this.props.children}</div>
        </Popover>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addDatapoint
};

export default connect(null, mapDispatchToProps)(DayCircle);

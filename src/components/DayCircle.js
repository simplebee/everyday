import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Popover, Button, InputNumber } from 'antd';

import { createDatapoint } from '../actions/datapointActions';
import { habitPropTypes } from '../lib/propTypesValues';
import { datapointDayTotalSelector } from '../selectors';

class DayCircle extends Component {
  static propTypes = {
    createDatapoint: propTypes.func.isRequired,
    datapointDayTotal: propTypes.number.isRequired,
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
    this.props.createDatapoint(_id, data);
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
          <div className="day-circle__circle">
            {this.props.children}
            <div>{this.props.datapointDayTotal}</div>
          </div>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    datapointDayTotal: datapointDayTotalSelector(
      state,
      props.habit._id,
      props.date
    )
  };
};

const mapDispatchToProps = {
  createDatapoint
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayCircle);

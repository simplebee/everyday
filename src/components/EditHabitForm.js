import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Form, Input, Radio, Button } from 'antd';

class EditHabitForm extends Component {
  static propTypes = {
    name: propTypes.string.isRequired,
    goalValue: propTypes.number.isRequired,
    frequency: propTypes.string.isRequired,
    handleChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired
  };

  render() {
    const { habitId } = this.props.match.params;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Item {...formItemLayout} label="Name">
            <Input
              name="name"
              value={this.props.name}
              onChange={this.props.handleChange}
            />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Goal value">
            <Input
              name="goalValue"
              type="number"
              value={this.props.goalValue}
              onChange={this.props.handleChange}
            />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Frequency">
            <Radio.Group
              name="frequency"
              value={this.props.frequency}
              onChange={this.props.handleChange}
            >
              <Radio value={'daily'}>Daily</Radio>
              <Radio value={'weekly'}>Weekly</Radio>
              <Radio value={'monthly'}>Monthly</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Link to={`/app/${habitId}`}>
              <Button>Cancel</Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(EditHabitForm);

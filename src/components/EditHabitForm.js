import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Radio, Button } from 'antd';

function EditForm(props) {
  const { habitId } = props.match.params;

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
      <Form onSubmit={props.handleSubmit}>
        <Form.Item {...formItemLayout} label="Name">
          <Input name="name" value={props.name} onChange={props.handleChange} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Goal value">
          <Input
            name="goalValue"
            type="number"
            value={props.goalValue}
            onChange={props.handleChange}
          />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Frequency">
          <Radio.Group
            name="frequency"
            value={props.frequency}
            onChange={props.handleChange}
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

export default EditForm;

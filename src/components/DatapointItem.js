import React, { Component } from 'react';
import { Row, Col, List, Button } from 'antd';
import moment from 'moment';

class DatapointItem extends Component {
  render() {
    return (
      <List.Item>
        <div style={{ width: '100%' }}>
          <Row>
            <Col span={12}>
              <div>
                {moment(this.props.datapoint.date).format('DD/MM/YYYY')}
              </div>
            </Col>
            <Col span={12}>
              <div>{this.props.datapoint.value}</div>
            </Col>
          </Row>
        </div>
        <span style={{ float: 'left' }}>
          <Button>edit</Button>
          <Button>delete</Button>
        </span>
      </List.Item>
    );
  }
}

export default DatapointItem;

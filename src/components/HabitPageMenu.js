import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class HabitPageMenu extends Component {
  state = {
    current: 'calendar'
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { match } = this.props;

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="calendar">
          <Link to={`${match.url}`}>Calendar</Link>
        </Menu.Item>
        <Menu.Item key="datapoints">
          <Link to={`${match.url}/datapoints`}>Datapoints</Link>
        </Menu.Item>
        <Menu.Item key="graph">
          <Link to={`${match.url}/graph`}>Graph</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(HabitPageMenu);

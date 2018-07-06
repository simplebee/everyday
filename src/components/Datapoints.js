import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { List } from 'antd';

import { habitSelector } from '../selectors';
import { fetchHabit } from '../actions/habitActions';
import { addDatapoint } from '../actions/datapointActions';
import { habitPropTypes } from '../lib/propTypesValues';
import DatapointItem from './DatapointItem';
import DatapointAdd from './DatapointAdd';

class Datapoints extends Component {
  static propTypes = {
    habit: habitPropTypes,
    fetchHabit: propTypes.func.isRequired,
    addDatapoint: propTypes.func.isRequired
  };

  componentDidMount() {
    const { habitId } = this.props.match.params;
    this.props.fetchHabit(habitId);
  }

  render() {
    if (!this.props.habit) {
      return <div />;
    }

    return (
      <div>
        <DatapointAdd
          habit={this.props.habit}
          addDatapoint={this.props.addDatapoint}
        />

        <List
          bordered
          dataSource={this.props.habit.datapoints}
          renderItem={item => <DatapointItem datapoint={item} />}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { habit: habitSelector(state, ownProps) };
}

const mapDispatchToProps = { fetchHabit, addDatapoint };

export default connect(mapStateToProps, mapDispatchToProps)(Datapoints);

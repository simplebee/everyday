import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { List } from 'antd';

import { habitSelector, datapointSelector } from '../selectors';
import { fetchHabit } from '../actions/habitActions';
import {
  createDatapoint,
  updateDatapoint,
  deleteDatapoint
} from '../actions/datapointActions';
import { habitPropTypes, datapointsPropTypes } from '../lib/propTypesValues';
import DatapointItem from './DatapointItem';
import DatapointAdd from './DatapointAdd';

class Datapoints extends Component {
  static propTypes = {
    habit: habitPropTypes,
    datapoints: datapointsPropTypes,
    fetchHabit: propTypes.func.isRequired,
    createDatapoint: propTypes.func.isRequired,
    updateDatapoint: propTypes.func.isRequired,
    deleteDatapoint: propTypes.func.isRequired
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
          createDatapoint={this.props.createDatapoint}
        />

        <List
          bordered
          dataSource={this.props.datapoints}
          renderItem={item => (
            <DatapointItem
              datapoint={item}
              habitId={this.props.match.params.habitId}
              updateDatapoint={this.props.updateDatapoint}
              deleteDatapoint={this.props.deleteDatapoint}
            />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    habit: habitSelector(state, ownProps.match.params.habitId),
    datapoints: datapointSelector(state, ownProps.match.params.habitId)
  };
}

const mapDispatchToProps = {
  fetchHabit,
  createDatapoint,
  updateDatapoint,
  deleteDatapoint
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Datapoints);

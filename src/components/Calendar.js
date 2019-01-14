import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import CalendarDay from './CalendarDay';
import { fetchHabit } from '../actions/habitActions';

class Calendar extends Component {
  static propTypes = {
    fetchHabit: propTypes.func.isRequired
  };

  componentDidMount() {
    const { habitId } = this.props.match.params;
    this.props.fetchHabit(habitId);
  }

  renderDay = day => {
    const { habitId } = this.props.match.params;
    return <CalendarDay day={day} habitId={habitId} />;
  };

  render() {
    return <DayPicker month={new Date()} renderDay={this.renderDay} />;
  }
}

const mapDispatchToProps = { fetchHabit };

export default connect(null, mapDispatchToProps)(Calendar);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import HabitCard from './HabitCard';
import { fetchHabits } from '../actions/habitActions';
import { habitPropTypes } from '../lib/propTypesValues';

class HomePage extends Component {
  static propTypes = {
    fetchHabits: propTypes.func.isRequired,
    habits: propTypes.arrayOf(habitPropTypes).isRequired
  };

  componentDidMount() {
    this.props.fetchHabits();
  }

  renderList() {
    return this.props.habits.map(habit => {
      return <HabitCard key={habit._id} habit={habit} />;
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Link to={`${match.url}/new`}>
          <Button type="primary" icon="plus">
            Add habit
          </Button>
        </Link>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { habits: state.habits };
}

const mapDispatchToProps = { fetchHabits };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

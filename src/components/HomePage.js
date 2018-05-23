import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import HabitCard from './HabitCard';
import { fetchHabits } from '../actions/habitActions';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchHabits();
  }

  renderList() {
    return this.props.habit.map(habit => {
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
  return { habit: state.habit };
}

const mapDispatchToProps = { fetchHabits };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

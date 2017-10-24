import React, { Component } from 'react';

class HabitShow extends Component {

  render() {
    return (
      <div>{this.props.match.params.id}</div>
    );
  }
}

export default HabitShow;
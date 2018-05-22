import React, { Component } from 'react';
import HabitPageMenu from './HabitPageMenu';
import HabitPageContent from './HabitPageContent';

class HabitPageLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <HabitPageMenu />
        <HabitPageContent />
      </React.Fragment>
    );
  }
}

export default HabitPageLayout;

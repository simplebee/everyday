import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import { Button } from 'antd';

import Calendar from './Calendar';
import Datapoints from './Datapoints';
import Graph from './Graph';
import { deleteHabit } from '../actions/habitActions';

class HabitPageContent extends Component {
  handleDeleteClick = () => {
    const { habitId } = this.props.match.params;
    this.props
      .deleteHabit(habitId)
      .then(() => this.props.history.push('/app'))
      .catch(error => console.log(error));
  };

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <div>
          <Link to={`${match.url}/edit`}>
            <Button icon="edit">Edit</Button>
          </Link>
          <Button type="danger" icon="delete" onClick={this.handleDeleteClick}>
            Delete
          </Button>
        </div>
        <Route path={`${match.path}`} exact component={Calendar} />
        <Route path={`${match.path}/datapoints`} component={Datapoints} />
        <Route path={`${match.path}/graph`} component={Graph} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = { deleteHabit };

export default withRouter(connect(null, mapDispatchToProps)(HabitPageContent));

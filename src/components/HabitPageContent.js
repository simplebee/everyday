import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Calendar from './Calendar';
import Datapoints from './Datapoints';
import Graph from './Graph';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class HabitPageContent extends Component {
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

export default withRouter(HabitPageContent);

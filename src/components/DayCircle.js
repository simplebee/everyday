import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addDatapoint } from '../actions/datapointActions';

const style = {
  height: 50,
  width: 50,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class DayCircle extends Component {
  state = {
    open: false,
    datapointValue: 1
  }

  handlePaperClick = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { datapointValue } = this.state;
    const { _id } = this.props.habit;
    const dateStr = this.props.date.format("YYYY-MM-DD");
    const data = {
      date: dateStr,
      value: datapointValue
    }
    this.props.addDatapoint(_id, data);
  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <Paper
          style={style}
          zDepth={1}
          circle={true}
          onClick={this.handlePaperClick}
        >
          {this.props.children}
        </Paper>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          useLayerForClickAway={false}
        >
          <div style={{margin: 10}}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                type="number"
                name="datapointValue"
                value={this.state.datapointValue}
                onChange={this.handleInputChange}
              />
              <RaisedButton label="Add" type="submit" />
            </form>
          </div>
        </Popover>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addDatapoint
}

export default connect(null, mapDispatchToProps)(DayCircle);
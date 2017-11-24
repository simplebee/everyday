import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 50,
  width: 50,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class HabitCircle extends Component {
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
    // this.props.addDatapoint(_id, date, datapointValue);
    console.log(_id, dateStr, datapointValue);
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

export default HabitCircle;
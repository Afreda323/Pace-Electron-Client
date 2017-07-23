import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";

class BudgetEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.handleEdit(this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <Paper zDepth={2}>
        <form onSubmit={this.handleEdit.bind(this)}>
          <h1>Update Weekly Budget</h1>
          <TextField
            type="number"
            hintText="New Budget Amount"
            value={this.state.value}
            onChange={({ target: { value } }) => this.setState({ value })}
          />
          <br />
          <RaisedButton type="submit" primary label="Change Budget" />
        </form>
      </Paper>
    );
  }
}

export default BudgetEdit;

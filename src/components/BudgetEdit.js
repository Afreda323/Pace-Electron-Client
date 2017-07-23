import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class BudgetEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  render() {
    return (
      <form onSubmit={() => this.props.handleEdit(this.state.value)}>
        <h1>Update Weekly Budget</h1>
        <TextField
          type="number"
          hintText="New Budget Amount"
          onChange={({ target: { value } }) => this.setState({ value })}
        />
        <br />
        <RaisedButton type="submit" primary label="Change Budget" />
      </form>
    );
  }
}

export default BudgetEdit;

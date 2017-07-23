import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";

class AddTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      desc: ""
    };
  }
  handleAdd(e) {
    e.preventDefault();
    this.props.handleEdit(this.state.amount, this.state.desc);
    this.setState({ amount: "", desc: "" });
  }
  render() {
    return (
      <Paper zDepth={2}>
        <form onSubmit={this.handleAdd.bind(this)}>
          <h1>Add transaction</h1>
          <TextField
            type="number"
            value={this.state.amount}
            hintText="Transaction Amount"
            onChange={({ target: { value } }) =>
              this.setState({ amount: value })}
          />
          <br />
          <TextField
            type="text"
            hintText="Transaction Description"
            value={this.state.desc}
            onChange={({ target: { value } }) => this.setState({ desc: value })}
          />
          <br />
          <RaisedButton type="submit" primary label="Add Transaction" />
        </form>
      </Paper>
    );
  }
}

export default AddTrans;

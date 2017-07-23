import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class Trans extends Component {
  constructor(props) {
    super(props);
    const { trans } = this.props;
    this.state = {
      editing: false,
      amount: trans.amount,
      desc: trans.description
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.handleEdit(this.props.id, this.state.amount, this.state.desc);
    this.setState({ editing: false });
  }
  handleDelete() {
    this.props.handleDelete(this.props.id);
  }
  render() {
    const { trans } = this.props;
    return (
      <div>
        <li
          onDoubleClick={() => this.setState({ editing: !this.state.editing })}>
          {this.state.editing
            ? <form onSubmit={this.handleEdit}>
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
                  onChange={({ target: { value } }) =>
                    this.setState({ desc: value })}
                />
                <br />
                <RaisedButton type="submit" primary label="Edit Transaction" />
              </form>
            : <span>
                {trans.amount}
                <br />
                {trans.description}
                <br />
                {trans.timestamp}
                <br />
                <RaisedButton
                  secondary
                  label="Delete Transaction"
                  onClick={this.handleDelete}
                />
              </span>}
        </li>
      </div>
    );
  }
}

export default Trans;

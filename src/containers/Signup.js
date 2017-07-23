import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { validate, renderTextField } from "../util/form.js";
import { connect } from "react-redux";
import { signup } from "../actions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.checkForToken = this.checkForToken.bind(this);
  }
  checkForToken() {
    if (this.props.token) {
      this.props.history.replace("/dash");
    }
  }
  render() {
    const {
      signup,
      handleSubmit,
      pristine,
      submitting,
      error,
      success
    } = this.props;

    return (
      <div className="wrap">
        {this.checkForToken()}
        <form className="wrap__form" onSubmit={handleSubmit(signup)}>
          <h1 className="wrap__form__header">Sign Up</h1>
          <div>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              type="email"
            />
          </div>
          <div>
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="password"
            />
          </div>
          <div>
            <Field
              name="confirm"
              component={renderTextField}
              label="Confirm Password"
              type="password"
            />
          </div>
          <p className="red-text">
            {error &&
              <strong>
                {error}
              </strong>}
          </p>
          {success
            ? ""
            : <div>
                <RaisedButton type="submit" primary label="Sign Up!" />
              </div>}
          <br />
          <small className="wrap__form__small">
            Already a member? <Link to="/">Log in!</Link>
          </small>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    token: auth.token
  };
}

export default connect(mapStateToProps, { signup })(
  reduxForm({
    form: "signup",
    validate
  })(Signup)
);

import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

import App from "./containers/App";

import Signup from "./containers/Signup";
import Dash from "./containers/Dash";
import ProtectedRoute from "./components/ProtectedRoute";

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute
            path="/dash"
            component={Dash}
            token={this.props.auth.token}
          />
        </div>
      </HashRouter>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};
export default connect(mapStateToProps)(Routes);

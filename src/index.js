import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import store from "./store";

import App from "./containers/App";
import Signup from "./containers/Signup";
injectTapEventPlugin();

const darkMuiTheme = getMuiTheme({
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: "#26C6DA"
  }
});
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={darkMuiTheme}>
      <HashRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);

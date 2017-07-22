import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "material-ui/styles";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import store from "./store";

import App from "./containers/App";

injectTapEventPlugin();

const darkMuiTheme = getMuiTheme({
  ...darkBaseTheme,
  palette: {
      ...darkBaseTheme.palette,
    primary1Color: '#26C6DA'
  }
});
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={darkMuiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);

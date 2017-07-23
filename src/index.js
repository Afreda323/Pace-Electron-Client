import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import store from "./store";
import Routes from "./routes";

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
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);

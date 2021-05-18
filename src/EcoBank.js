import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppRouter from "./router/AppRouter";
import "./App.css";

function EcoBank() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: `'Roboto', sans-serif`,
      fontSize: 14,
      fontWeightLight: 200,
      fontWeightRegular: 300,
      fontWeightMedium: 400,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default EcoBank;

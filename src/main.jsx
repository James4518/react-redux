import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={{ color: "yellow" }}>
      <App />
    </ThemeProvider>
  </Provider>
);

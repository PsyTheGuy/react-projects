import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider, AppContext } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider value={AppContext}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

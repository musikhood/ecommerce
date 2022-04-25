import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import store from "./store/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import history from "./history";
import App from "./App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App className="container" />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

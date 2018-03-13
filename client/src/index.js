import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router history={history}>
    <App className="container" />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

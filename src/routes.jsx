import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./app";
import Login from "./components/Login";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default Routes;

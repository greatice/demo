import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import accounts from "./pages/accounts";
import leave from "./pages/leave";
import myProfile from "./pages/profile";
import error from "../404";

function Index() {
  return <div></div>;
}

export default () => (
  <Switch>
    <Route exact path="/staff" component={Index} />
    <Route exact path="/staff/About" component={About} />
    <Route exact path="/staff/Dashboard" component={Dashboard} />
    <Route exact path="/staff/accounts" component={accounts} />
    <Route exact path="/staff/leave" component={leave} />
    <Route exact path="/staff/myProfile" component={myProfile} />
    <Route component={error} />
  </Switch>
);

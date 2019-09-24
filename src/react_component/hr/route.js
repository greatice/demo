import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import accounts from "./pages/accounts";
import leave from "./pages/leave";
import staffList from "./pages/profile";
import error from "../404";

function Index() {
  return <div></div>;
}
export default () => (
  <Switch>
    <Route exact path="/hr" component={Index} />
    <Route exact path="/hr/About" component={About} />
    <Route exact path="/hr/Dashboard" component={Dashboard} />
    <Route exact path="/hr/accounts" component={accounts} />
    <Route exact path="/hr/leave" component={leave} />
    <Route exact path="/hr/staffList" component={staffList} />
    <Route component={error} />
  </Switch>
);

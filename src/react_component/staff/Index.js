import React from "react";

import TopNav from "../TopNav";
import SideNav from "./SideNav";
import Routes from "./route";

export default class Staff extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TopNav />
        <SideNav />
        <Routes />
      </div>
    );
  }
}

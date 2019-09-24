import React from "react";
import Routes from "./react_component/route";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

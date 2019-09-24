import React from "react";
import axios from "axios";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: [] };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onFormSubmit}>
          <span>Input employee ID:</span>
          <input
            name="ID"
            value={this.props.ID}
            onChange={this.props.onInputChange}
          ></input>
          <button onClick={this.props.submit}>submit</button>
        </form>
      </div>
    );
  }
}

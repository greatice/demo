import React from "react";
import axios from "axios";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isNewProfile: true, profile: [] };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onFormSubmit}>
          <span>Input your ID:</span>
          <input
            name="id"
            value={this.props.Id}
            onChange={this.props.idInputChange}
          ></input>
          <span>Input your NAME:</span>
          <input
            name="name"
            value={this.props.name}
            onChange={this.props.nameInputChange}
          ></input>
          <button onClick={this.props.submit}>submit</button>
        </form>
      </div>
    );
  }
}

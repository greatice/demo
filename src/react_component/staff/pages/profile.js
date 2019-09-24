import React from "react";
import axios from "axios";
import ProfileForm from "./profileform";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      isLoaded: true
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    const _this = this;
    axios
      .post(`http://localhost:3001/api/profile/`, {
        name: _this.state.name,
        id: _this.state.id
      })
      .then(function(response) {
        alert("upload succeed");
      })
      .catch(function(err) {
        alert("upload failed");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <ProfileForm
          onFormSubmit={this.onFormSubmit}
          id={this.state.id}
          name={this.state.name}
          nameInputChange={this.handleInputChange}
          idInputChange={this.handleInputChange}
          submit={this.submit}
        />
      </div>
    );
  }
}

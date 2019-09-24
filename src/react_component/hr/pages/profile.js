import React from "react";
import axios from "axios";
import ProfileList from "./profilelist";
import ProfileById from "./profilelistById";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      isLoaded: true,
      ID: ""
    };
  }

  componentDidMount() {
    const _this = this;
    axios
      .get("http://localhost:3001/api/profile")
      .then(function(response) {
        _this.setState((Pre, props) => {
          return { profile: response.data, isLoaded: true };
        });
      })
      .catch(function(err) {
        console.log(err);
        _this.setState(() => {
          return { isLoaded: false };
        });
      });
  }

  onFormSubmit = e => {
    e.preventDefault();
  };

  onInputChange = e => {
    this.setState({ ID: e.target.value });
  };

  submit = e => {
    const _this = this;
    axios
      .get(`http://localhost:3001/api/profile/${_this.state.ID}`)
      .then(function(response) {
        _this.setState((Pre, props) => {
          return { profile: [response.data] };
        });
      })
      .catch(function(err) {
        alert("data not found!");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <ProfileById
          onFormSubmit={this.onFormSubmit}
          ID={this.state.ID}
          onInputChange={this.onInputChange}
          submit={this.submit}
        />
        {this.state.profile.map((list, index) => {
          return <ProfileList key={index} name={list.name} id={list._id} />;
        })}
      </div>
    );
  }
}

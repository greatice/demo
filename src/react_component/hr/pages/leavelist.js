import React from "react";
import axios from 'axios';

export default class leaveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: ''
    };
  }

  onInputChange = e => {
    this.setState({ choose: e.target.value});
  };
  onFormSubmit = e => {
    e.preventDefault();
  };

  submit = e => {
    const _this = this;
    if(_this.state.choose==='true'){
    axios
      .put(`http://localhost:3001/api/leavecheck`)
      .then(
        axios.delete(`http://localhost:3001/api/leavecheck`)).then(
        function(response) {
        alert("upload succeed");
      })
      .catch(function(err) {
        alert("upload failed");
        console.log(err);
      });
  }
  else{alert('Request not approved')}
  } 

  render() {
    return (
      <div>
        <h3>
          StartTime:{this.props.ST},StartDate:{this.props.SD},EndDate:
          {this.props.ED}
        </h3>
        <form onSubmit={this.onFormSubmit}>
          <span>Do you approve this request?</span>
          <input
            type="radio"
            name="request"
            value="true"
            onChange={this.onInputChange}
          ></input>
          <label>yes</label>
          <input
            type="radio"
            name="request"
            value="false"
            onChange={this.onInputChange}
          ></input>
          <label>no</label>
          <button onClick={this.submit}>submit</button>
        </form>
      </div>
    );
  }
}

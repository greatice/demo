import React from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import axios from 'axios'

export default class calendar extends React.Component {
  state = {
    date: [new Date(), new Date()]
  };

  onChange = date => this.setState({ date });

  onFormSubmit = e => {
    e.preventDefault();
  };

  submit = e => {
    const _this = this;
    axios
      .post(`http://localhost:3001/api/leave/`, {
      StartTime:_this.state.date[0].toLocaleTimeString(),
      StartDate:_this.state.date[0].toLocaleDateString(),
      EndDate:_this.state.date[1].toLocaleDateString(),
      id:Math.floor(Math.random()*1000),
      isApproved:false
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
        <DateTimeRangePicker
          formate={"y-dd-MM h:mm:ss a"}
          disableClock={true}
          minDate={new Date()}
          onChange={this.onChange}
          locale={"en"}
          value={this.state.date}
        />

        <form onSubmit={this.onFormSubmit}>
          <span>I confirm the leaving request above is correct</span>
          <button onClick={this.submit}>submit</button>
        </form>

      </div>
    );
  }
}

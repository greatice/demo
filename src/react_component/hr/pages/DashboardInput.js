import React from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import { SliderPicker } from "react-color";

export default class calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="DashBoardInput">
        <span>Pick a time for your event:</span>
        <div className="DashBoardInputTime">
          <DateTimeRangePicker
            formate={"y-dd-MM h:mm:ss a"}
            disableClock={true}
            disableCalendar={true}
            minDate={new Date()}
            onChange={this.props.onChange}
            value={this.props.date}
            locale={"en"}
          />
        </div>
        <span>Pick your event color:</span>
        <div className="DashBoardInputColor">
          <SliderPicker
            color={this.props.color}
            onChange={this.props.handleColorChange}
          />
        </div>
        <span>Input your event:</span>
        <div className="DashBoardInputForm">
          <form onSubmit={this.onFormSubmit}>
            <input
              name="Event"
              value={this.props.event}
              onChange={this.props.onInputChange}
            ></input>
            <button onClick={this.props.submit}>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

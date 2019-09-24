import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import DashBoardInput from "./DashboardInput";
import axios from "axios";

import "../../../CSS/dashboard.scss"; 

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [new Date(), new Date()],
      event: [],
      input: "",
      color: "#e6b3b3"
    };
  }

  onChange = date => this.setState({ date });

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  timeTransfer = e => {
    return `${e.getFullYear()}-0${e.getMonth() + 1}-${e.getDate() + 1}`;
  };

  timeTransfer2 = e => {
    return `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate() + 1}`;
  };

  handleColorChange = colorCode => {
    this.setState({ color: colorCode.hex });
  };

  componentDidMount() {
    const _this = this;
    axios
      .get("http://localhost:3001/api/dashboard/")
      .then(response => {
        _this.setState((pre, props) => {
          return { event: response.data };
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  axiosSubmit = (start, end) => {
    const _this = this;
    axios
      .post("http://localhost:3001/api/dashboard/", {
        start: start,
        end: end,
        title: _this.state.input,
        backgroundColor:this.state.color,
        id: Math.floor(Math.random() * 1000)
      })
      .then(response => {
        alert("upload succeed");
        axios.get("http://localhost:3001/api/dashboard/").then(response => {
          alert("fetch data succeed");
          _this.setState((pre, props) => {
            return { event: response.data };
          });
        });
      })
      .catch(err => {
        alert("fetch data failed");
        console.log(err);
      });
  };

  submit = e => {
    const _this = this;
    const startMonthTest = this.state.date[0].getMonth();
    const endMonthTest = this.state.date[1].getMonth();
    if (startMonthTest < 9 && endMonthTest < 9) {
      _this.axiosSubmit(
        _this.timeTransfer(this.state.date[0]),
        this.timeTransfer(this.state.date[1])
      );
    } else if (startMonthTest < 9 && endMonthTest > 8) {
      _this.axiosSubmit(
        _this.timeTransfer(this.state.date[0]),
        this.timeTransfer2(this.state.date[1])
      );
    } else {
      _this.axiosSubmit(
        _this.timeTransfer2(this.state.date[0]),
        this.timeTransfer2(this.state.date[1])
      );
    }
  };

  render() {
    return (
      <div>
        <DashBoardInput
          date={this.state.date}
          submit={this.submit}
          onChange={this.onChange}
          event={this.state.input}
          onInputChange={this.onInputChange}
          handleColorChange={this.handleColorChange}
          color={this.state.color}
        />
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          weekends={true}
          editable={true}
          selectable={true}
          aspectRatio={2}
          events={this.state.event}
        />
      </div>
    );
  }
}

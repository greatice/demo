import React from "react";
import axios from "axios";
import LeaveList from './leavelist';

export default class Leave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoaded: true,
    };
  }

  componentDidMount() {
    const _this = this;
    axios
      .get("http://localhost:3001/api/leavecheck")
      .then(function(response) {
        _this.setState((Pre, props) => {
          return { list: response.data, isLoaded: true };
        });
      })
      .catch(function(err) {
        console.log(err);

        _this.setState(() => {
          return { isLoaded: false };
        });
      });
  }

  render() {
    return (
      <div>
      {this.state.list.map((list, index) => {
        return (
        <LeaveList key={index} ST={list.StartTime} SD={list.StartDate} ED={list.EndDate} />)
      })}

      </div>
    );
  }
}

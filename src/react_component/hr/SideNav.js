import React from "react";
import { Link } from "react-router-dom";

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="SideNav">
          <li>
            <Link to="/hr/About">About us</Link>
          </li>
          <li>
            <Link to="/hr/staffList">staffList</Link>
          </li>
          <li>
            <Link to="/hr/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/hr/leave">leave Requests</Link>
          </li>
          <li>
            <Link to="/hr/Accounts">Accounts</Link>
          </li>
        </ul>
      </div>
    );
  }
}

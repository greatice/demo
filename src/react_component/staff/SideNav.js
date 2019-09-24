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
            <Link to="/staff/About">About us</Link>
          </li>
          <li>
            <Link to="/staff/myProfile">myProfile</Link>
          </li>
          <li>
            <Link to="/staff/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/staff/leave">leave Requests</Link>
          </li>
          <li>
            <Link to="/staff/Accounts">Accounts</Link>
          </li>
        </ul>
      </div>
    );
  }
}

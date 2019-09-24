import React from "react";
import { withRouter, Link } from "react-router-dom";
import Email from "../Public/email.svg";
import signOut from "../Public/sign_out.svg";
import profile from "../Public/profile.svg";
import home from "../Public/Home.svg";
import { connect } from "react-redux";
import { logout } from "../redux/action";
import '../CSS/TopNav.scss'

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TopNav">
        <Link to="/about">
          <img src={Email} style={{ height: 30 }} />
        </Link>
        <img src={profile} style={{ height: 30 }} />
        <Link to="/">
        <img src={home} style={{ height: 40 }} />
        </Link>
        <Link to="/">
          <img className="Logout" src={signOut} style={{ height: 30 }}  onClick={e => {
            e.preventDefault();
            this.props.dispatch(logout());
            this.props.history.replace('/')
          }}/>
          </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin
  };
};

export default connect(mapStateToProps)(withRouter(TopNav));

import React from "react";
import { withRouter,Link } from "react-router-dom";
import { connect } from "react-redux";
import {login} from "../redux/action"
import home from "../Public/Home.svg";
import "../CSS/signing.scss"

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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


  submit = () => {
    const { email, password } = this.state;
    if (email === "admin" && password === "admin") {
      this.props.history.push("/hr");
      this.props.dispatch(login());
    } else if (email === "staff" && password === "staff") {
      this.props.history.push("/staff");
      this.props.dispatch(login());
    } else {
      alert("account doesnt exist/password not correct");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <span>Input your Email address:</span>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Email address"
            required
          ></input>
          <span>Input your password:</span>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="password"
            required
          ></input>
          <button onClick={this.submit}>submit</button>
          <Link to="/" >
        <img className="home" src={home} style={{ height: 100 }}  />
        </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin:state.isLogin
  };
};

export default connect(mapStateToProps)(withRouter(SignIn));



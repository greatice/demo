import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import HR from "./hr/Index";
import staff from "./staff/Index";
import error from "./404";
import signIn from "./signin";
import { connect } from "react-redux";


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello please choose your service:</h1>
        <Link to="/hr">
          <button>I'm HR manager</button>
        </Link>
        <Link to="/staff">
          <button>I'm employee</button>
        </Link>
      </div>
    );
  }
}

class route extends React.Component {
  constructor(props) {
    super(props);
  }

  ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => {
    const _this = this;
    return (
      <Route
        {...rest}
        render={routeProps =>
          _this.props.isLogin === true ? (
            <ProtectedComponent {...routeProps} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin"
              }}/>)}/>);};

  render() {
    const ProtectedRoute=this.ProtectedRoute;
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/signin" component={signIn} />
        <ProtectedRoute path="/hr" component={HR} />
        <ProtectedRoute path="/staff" component={staff} />
        <Route component={error} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin
  };
};

export default connect(mapStateToProps)(route);

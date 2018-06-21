import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      displayLogin: false
    };
  }

  loginInit = () => {
    this.setState({ displayLogin: true });
  };

  render() {
    return (
      <div>
        <h3
          id="login-trigger"
          style={this.state.displayLogin ? { display: "none" } : {}}
          onClick={this.loginInit}>
          Login
        </h3>
        <h1
          id={this.state.displayLogin ? "login-header-slide" : "login-header"}>
          Welcome
        </h1>

        {/* LOGIN BOX */}
        <div id={this.state.displayLogin ? "displayLogin" : "hideLogin"}>
          <h4>Login to access endless high fidelity images</h4>
        </div>
      </div>
    );
  }
}

export default Login;

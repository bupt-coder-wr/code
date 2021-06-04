import React, { Component } from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class LoginControl extends Component {
  state = {
    isLoggedIn: false,
  };

  changeButton = () => {
    console.log(this.state.isLoggedIn);
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    let button = isLoggedIn ? (
      <LoginButton changeButton={this.changeButton} />
    ) : (
      <LogoutButton changeButton={this.changeButton} />
    );

    return (
      <div>
        <Greeting isLoggedin={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;

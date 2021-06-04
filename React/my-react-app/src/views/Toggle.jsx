import React, { Component } from "react";

class Toggle extends Component {
  state = {
    isToggleOn: false,
  };

  changeToggle = (e) => {
    console.log(e);
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };

  render() {
    return (
      <button onClick={this.changeToggle.bind(this)}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;

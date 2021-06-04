import React, { Component } from "react";
class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      timeId: "",
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  tick() {
    // 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }
}

export default Clock;

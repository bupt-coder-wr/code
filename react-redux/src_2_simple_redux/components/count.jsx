import React, { Component } from "react";
import store from "../redux/store";
class Count extends Component {
  state = {
    count: 0,
  };
  // 增加
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch({ type: "increment", data: value * 1 });
  };
  // 减少
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch({ type: "decrement", data: value * 1 });
  };
  // 奇数增加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({ type: "incrementIfOdd", data: value * 1 });
    }
  };
  // 异步增加
  asyncIncrement = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch({ type: "asyncIncrement", data: value * 1 });
    }, 5000);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>incretion odd</button>&nbsp;
        <button onClick={this.asyncIncrement}>incretion async</button>
      </div>
    );
  }
}
export default Count;

import React, { Component } from "react";
// 引入Count的UI组件
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

class Count extends Component {
  // 增加
  increment = () => {
    const { value } = this.selectNumber;
    this.props.createIncrementAction(value * 1);
  };
  // 减少
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.createDecrementAction(value * 1);
  };
  // 奇数增加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.createIncrementAction(value * 1);
    }
  };
  // 异步增加
  asyncIncrement = () => {
    const { value } = this.selectNumber;
    this.props.createIncrementAsyncAction(value * 1, 500);
  };
  render() {
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为：{this.props.count}</h4>
        <h4>Person组件总人数：{this.props.personCount}</h4>
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

export default connect(
  (state) => ({ count: state.count, personCount: state.person.length }),
  {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction,
  }
)(Count);

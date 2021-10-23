import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import { observable, action } from "mobx";

// 1. 初始化 mobx 容器仓库
class Store {
  @observable count = 22;
  @action.bound increment = () => {
    console.log(this.count)
    this.count++;
  };
}
// 2. 在组件中使用 mobx 容器仓库

// 3. 在组件中发起 action 修改容器仓库
ReactDom.render(<App store={new Store()} />, document.getElementById("root"));

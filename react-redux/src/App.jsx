import React, { Component } from "react";
import store from "./redux/store";
import Count from "./containers/Count"; // 引入Count的容器组件
import Person from "./containers/Person"; // 引入Person的容器组件
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
        {/* 需要用Provider包裹App */}
        <Provider store={store}>
          <Count />
          <hr />
          <Person />
        </Provider>
      </div>
    );
  }
}
export default App;

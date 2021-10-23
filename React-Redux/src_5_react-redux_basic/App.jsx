import React, { Component } from "react";
import store from "../src/redux/store";
import Count from "./containers/Count/index";
class App extends Component {
  render() {
    return (
      <div>
        <Count store={store} />
      </div>
    );
  }
}
export default App;

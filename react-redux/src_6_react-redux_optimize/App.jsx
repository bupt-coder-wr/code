import React, { Component } from "react";
import store from "./redux/store";
import Count from "./containers/Count/index";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Count />
        </Provider>
      </div>
    );
  }
}
export default App;

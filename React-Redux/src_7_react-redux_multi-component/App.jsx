import React, { Component } from "react";
import store from "./redux/store";
import Count from "./containers/Count";
import Person from "./containers/Person";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
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

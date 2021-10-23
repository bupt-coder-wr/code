import { observer } from "mobx-react";
import { Component } from "react";

@observer
class App extends Component {
  render() {
    const { store } = this.props;
    console.log(store);
    return (
      <div>
        <h1>App....</h1>
        {store.count}
        <p>
          <button onClick={store.increment}>ADD</button>
        </p>
      </div>
    );
  }
}
export default App;

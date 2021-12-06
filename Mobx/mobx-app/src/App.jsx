import { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  increment = () => {
    const { store } = this.props
    store.increment()
  }
  render() {
    const { store } = this.props

    return (
      <div>
        <h2>App</h2>
        <div>count:{store.count}</div>
        <p>
          <button onClick={this.increment}>increment</button>
        </p>
        <div>Total：{store.totalPrice}</div>
        <div>Total：{store.totalPrice}</div>
        <div>Total：{store.totalPrice}</div>
      </div>
    )
  }
}
export default App

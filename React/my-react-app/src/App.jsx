import { Component } from 'react'

import '../src/style/index.less'
// import Demo from './component/Test'
// import Demo from './component/3_hooks/useEffect'
// import Demo from './component/3_hooks/useContext'
// import Demo from './component/3_hooks/useReducer'
import Demo from './component/3_hooks/useCallback'
// import Demo from './component/3_hooks/useRef'
class App extends Component {
  render() {
    return (
      <div>
        <Demo />
      </div>
    )
  }
}
export default App

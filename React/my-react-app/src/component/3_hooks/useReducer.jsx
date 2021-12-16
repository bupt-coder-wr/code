import { useReducer } from 'react'
function Demo() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.todo]
      default:
        return state
    }
  }
  function init(initialCount) {
    return [...initialCount]
  }
  const [state, dispatch] = useReducer(
    reducer,
    [
      {
        id: Date.now(),
        value: 'Hello react',
      },
    ],
    init
  )
  console.log('state', state)
  console.log('dispatch', dispatch)
  return <div>123</div>
}
export default Demo

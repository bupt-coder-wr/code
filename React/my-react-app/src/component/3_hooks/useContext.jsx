import React, { useContext, createContext } from 'react'

const stateContext = createContext('default')

const ContextComponent = () => {
  const value = useContext(stateContext)
  return <div>{value}</div>
}
const Demo = () => (
  <stateContext.Provider value={'Hello React'}>
    <ContextComponent />
  </stateContext.Provider>
)

export default Demo

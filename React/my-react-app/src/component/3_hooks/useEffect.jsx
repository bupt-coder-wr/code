import React, { useEffect } from 'react'

function Demo() {
  const [count, setCount] = React.useState(0)
  /**
   * useEffect = componentDidMount + componentDidUpdate + componentWillUnmount
   * 没有第二个参数， 每次 render 后都会执行
   * 依赖项数组为空，只在 componentDidMount 钩子时期执行
   * 依赖项数组不为空，当依赖项发生变化后执行， 在 compoenntDidMount + compoenntDidUpdate 时期执行
   * 返回数组  在 componentWillUnmount 中执行
   * 重点： DOM更新完成后 执行某些副作用操作！！！！
   */
  useEffect(() => {
    console.log('useEffect')
  })
  useEffect(() => {
    console.log('useEffect')
  }, [])
  useEffect(() => {
    console.log('useEffect')
  }, [count])
  return (
    <div>
      <h2>当前求和为：{count}</h2>
      <button onClick={() => setCount(count => count + 1)}>点我+1</button>
    </div>
  )
}

export default Demo

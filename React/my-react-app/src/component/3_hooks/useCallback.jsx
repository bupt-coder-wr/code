import React, { useCallback, useState } from 'react'
let Button = ({ onClickButton, children }) => {
  console.log('render')
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <p>{Math.random()}</p>
    </>
  )
}
Button = React.memo(Button)

function Demo() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  const handleClickButton1 = () => {
    setCount1(count1 + 1)
  }

  /**
   * useCallback 接受一个回调函数
   * 当依赖项 count2 发生改变时，对 回调函数 重新进行调用
   * 当依赖性 count2 不改变时， 不调用 回调函数
   */
  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  return (
    <div>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <div>
        <Button onClickButton={() => setCount3(count3 + 1)}>Button3</Button>
      </div>
    </div>
  )
}
export default Demo

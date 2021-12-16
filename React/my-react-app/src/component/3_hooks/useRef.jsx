import React, { useRef, useEffect } from 'react'
const Demo = () => {
  let inputRef = useRef(null)
  useEffect(() => {
    console.log(inputRef)
    /**
     * 在input上绑定一个ref，使得input在渲染后自动焦点聚焦。
     */
    inputRef.current.focus()
  })
  return <input type="text" ref={inputRef} />
}
export default Demo

function mySetInterval(fn, wait = 300) {
  let timeId = null
  const interval = () => {
    timeId = setTimeout(interval, wait)
    fn()
  }
  timeId = setTimeout(interval, wait)
  return () => clearTimeout(timeId)
}

// 实例：
function log() {
  console.log(new Date())
}
const cancel = mySetInterval(log, 1000)
setTimeout(() => {
  cancel()
}, 3000)

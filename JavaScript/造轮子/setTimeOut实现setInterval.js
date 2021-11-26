function mySetInterval(fn, wait = 300) {
  function interval() {
    setTimeout(interval, wait)
    fn()
  }
  setTimeout(interval, wait)
}

// 实例：
function log() {
  console.log(new Date())
}
mySetInterval(log, 1000)

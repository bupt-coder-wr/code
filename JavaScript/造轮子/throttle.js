// 节流
function throttle(func, wait) {
  let previous = 0

  return function (...args) {
    var now = +new Date()
    let self = this
    if (now - previous > wait) {
      func.apply(self, args)
      previous = now
    }
  }
}
function throttle(cd, wait = 300) {
  var t = null
  return function (...args) {
    if (t) return
    t = setTimeout(() => {
      cd.apply(this, args)
      t = null
    }, wait)
  }
}

function fn() {
  console.log("test")
}
const wrapFn = throttle(fn, 2)
wrapFn()
wrapFn()

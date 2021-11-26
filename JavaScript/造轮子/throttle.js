// 节流
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

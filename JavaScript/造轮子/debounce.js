// https://github.com/mqyqingfeng/Blog/issues/22
// 防抖
const debounce = (fn, wait = 300, immediate = false) => {
  let timer = 0
  return function (...args) {
    const self = this
    if (timer) clearTimeout(timer)
    if (immediate) {
      let callnow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callnow) fn.apply(self, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(self, args)
      }, wait)
    }
  }
}

// 测试用例
function log() {
  console.log('logggg')
}
const a = debounce(log, 3)
a()
a()
a()
a()

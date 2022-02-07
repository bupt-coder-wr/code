Function.prototype.apply = function (context) {
  if (typeof context !== 'function') {
    throw new TypeError('')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

const obj = {
  fn: function fn() {
    console.log(this)
  },
}

obj.fn.apply(null) // window
obj.fn.apply(undefined) // window

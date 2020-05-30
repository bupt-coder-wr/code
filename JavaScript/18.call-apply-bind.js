Function.prototype.myCall = function (context) {  // context 为作用域对象
  if (typeof this !== 'function') { // this 为执行函数
    throw new TypeError('error')
  }
  context = context || window; //排除null
  context.fn = this;  //改变this
  const args = [...arguments].slice(1); // 传参，截取后面参数，若没有第二参数，则args = undefined
  const result = context.fn(args) // 执行函数
  delete context.fn;  // 删除对象
  return result;  // 返回结果
}

Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  context = context || window; //排除null
  context.fn = this;  //改变this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])  // 存在第二参数
  } else {
    result = context.fn() // 没有第二参数
  }
  delete context.fn
  return result;
}

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  const _this = this;
  const args = [...arguments].slice(1)
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

let obj = {
  value: 1
}
function getValue() {
  console.log(this.value)
}
getValue.myCall(obj)
getValue.myApply(obj)
let c = getValue.myBind(obj)
c()
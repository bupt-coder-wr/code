Function.prototype.myBind = function (context) {
  // if (typeof context !== "function") {
  //   throw new TypeError();
  // }
  const self = this
  const args = [...arguments].slice(1)
  return function F() {
    if (this instanceof F) {
      // 作为构造函数使用，返回一个实例
      console.log("执行了这里")
      return new self(...args, ...arguments)
    } else {
      // fn.bind(obj,1)(2)
      return self.apply(context, args.concat(...arguments))
    }
  }
}

// 作为构造函数使用的例子
function Person(name, age) {
  this.name = name
  this.age = age
}
const p1 = {
  name: "wr",
  age: 20
}
const fn = Person.myBind(p1, "wz")
const p = new fn(22)
console.log(p)

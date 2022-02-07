/**
 * 1. 内存中创建一个新对象
 * 2. 这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性
 * 3. this 指向新对象
 * <!-- 4. 执行构造函数内的代码 -->
 * 4. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的对象
 */
function create(Con, ...args) {
  let obj = {}
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, args)
  // 若 Con 函数存在返回值，则返回result
  // 若 Con 函数不存在返回值，则返回 obj
  return typeof result === 'object' ? result : obj
}

// 例子
function Person(name, age) {
  this.name = name
  this.age = age
  Person.prototype.getName = function () {
    console.log(this.name)
  }
}
const p1 = create(Person, 'Tars', 20)
console.log(p1)
p1.getName()

/**
 * 原型链继承
 */
//父类型
function Person(name, age) {
  (this.name = name), (this.age = age), (this.play = [1, 2, 3]);
  this.setName = function () {};
}
Person.prototype.setAge = function () {};
//子类型
function Student(price) {
  this.price = price;
  this.setScore = function () {};
}
Student.prototype = new Person(); // 子类型的原型为父类型的一个实例对象
var s1 = new Student(15000);
var s2 = new Student(14000);
console.log(s1, s2);
/**
  父类新增原型方法/原型属性，子类都能访问到
  简单，易于实现
 */

/**
 * 借用构造函数继承
 */
function Person(name, age) {
  (this.name = name), (this.age = age), (this.setName = function () {});
}
Person.prototype.setAge = function () {};
function Student(name, age, price) {
  Person.call(this, name, age); // 相当于: this.Person(name, age)
  /*this.name = name
  this.age = age*/
  this.price = price;
}
var s1 = new Student("Tom", 20, 15000);
/**
 * 解决了原型链继承中子类实例共享父类引用属性的问题
 * 创建子类实例时，可以向父类传递参数
 * 可以实现多继承(call多个父类对象)
 */

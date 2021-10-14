var person = {
  name: "van",
  age: 20,
  sayName: function () {
    alert(this.name);
  },
};
// 数据属性
Object.defineProperty(person, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "",
});
person.name = "run";
console.log(person.name);

//访问器属性
var man = {
  name: "wr",
  age: 18,
  sayAge: function () {
    alert(this.age);
  },
};
Object.defineProperty(man, "name", {
  configurable: false,
  enumerable: false,
  get: function () {
    return this.name;
  },
  set: function (name) {
    this.name = name;
  },
});

//读取属性的特性方法  Object.getOwnPropertyDescriptor()
var descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor.value);
console.log(descriptor.enumerable);

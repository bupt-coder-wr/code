function SuperType(name) {
  this.name = name;
  this.color = ["block", "yellow", "red"];
}
SuperType.prototype.sayName = function() {
  console.log("sayName:", this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
  console.log("sayAge", this.age);
};

const instance = new SubType("wr", 20);
instance.color.push("blue");
console.log(instance.color);
instance.sayName();
instance.sayAge();

const example = new SubType("wz", 25);
console.log(example.color);
example.sayName();
example.sayAge();

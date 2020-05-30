/**
 * 借用构造函数继承
 */
function SuperType() {
  this.color = ["black", "yellow", "red", "blue"];
}
function SubType() {
  SuperType.call(this, undefined);
}
const instance = new SubType();
instance.color.push("white");
console.log(instance.color);

const example = new SubType();
console.log(example.color);

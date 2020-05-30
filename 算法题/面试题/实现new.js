function create() {
  let obj = {};
  let Constrctor = [].shift.apply(arguments);
  obj.__prototype__ = Constrctor.prototype;
  let result = Constrctor.apply(obj, arguments);
  return typeof result === "object" ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  return {
    name,
    age
  };
}
let p1 = create(Person, "wr", 20);
console.log(p1);

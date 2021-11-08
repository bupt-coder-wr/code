function createPerson(name) {
  const person = {};
  person.name = name;
  person.getName = function () {
    console.log(this.name);
  };
  return person;
}

const p1 = createPerson("zhang san");
p1.getName();
console.log(p1.name);

// 工厂模式
function Car(model) {
  this.model = model;
}
Car.prototype.getModel = function () {
  return this.model;
};

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

function create(type, params) {
  return new this[type](params);
}
create.prototype = {
  person: Person,
  car: Car,
};

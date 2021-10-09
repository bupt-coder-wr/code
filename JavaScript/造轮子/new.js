function create(Con, ...args) {
  let obj = {};
  obj.__proto__ = Con.prototype;
  let result = Con.apply(obj, args);
  return typeof result === "object" ? result : obj;
}

function A(a) {
  this.a = a;
}
const obj = create(A, 3);
console.log(obj);

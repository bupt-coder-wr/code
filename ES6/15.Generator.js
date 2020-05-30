let generator = function* (a, b) {
  let sum = a + b;
  yield sum;
  let sub = a - b;
  yield sub;
  let mul = a * b;
  yield mul;
  let chu = a / b;
  yield chu;
}
let fun = generator(4, 2);
console.log(fun.next())
console.log(fun.next())
console.log(fun.next())
console.log(fun.next())
console.log(fun.next())
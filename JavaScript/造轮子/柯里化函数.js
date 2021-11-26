// add(1)(2)(3) = 6
// add(1,2,3)(4) = 10
// add(1)(2)(3)(4)(5) = 15;

function curry(fn) {
  const args = Array.prototype.slice.call(arguments, 1)
  return function () {
    let innerArgs = Array.prototype.slice.call(arguments)
    let finalArgs = args.concat(innerArgs)
    return fn.apply(null, finalArgs)
  }
}
function add(num1, num2) {
  return num1 + num2
}

var curriedAdd = curry(add, 5)

var curriedAdd2 = curry(add, 5, 12)
console.log(curriedAdd(2))

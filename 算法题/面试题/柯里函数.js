function curry(fn, args) {
  const length = fn.length;
  args = args || [];
  return function () {
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  };
}
function multiFn(a, b, c) {
  return a * b * c;
}
var multi = curry(multiFn);

multi(2)(3)(4);
console.log(multi(2, 3));
console.log(multi(2)(3, 4));
console.log(multi(2)(3));

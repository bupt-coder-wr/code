function sum(x, y) {
  if (arguments.length === 2) return x + y;
  else {
    return function (y) {
      return x + y;
    };
  }
}
console.log(sum(1, 2));
console.log(sum(1)(2));

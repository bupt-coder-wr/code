/**
 * sum(1)(2) = 3
 * sum(1)(2)(3) = 6
 * sum(1)(2)(3)(4) = 10
 */
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.valueOf = function () {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2));

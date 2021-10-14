/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = [];
  let i = 1;
  while (n >= i) {
    if (i % 15 === 0) {
      res.push("FizzBuzz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else {
      res.push(i + "");
    }
    i++;
  }
  return res;
};

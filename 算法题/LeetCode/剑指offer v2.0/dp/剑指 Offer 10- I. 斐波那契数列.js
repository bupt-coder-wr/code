/**
 * 2021/09.09
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (!n) return 0;
  if (n <= 2) return 1;
  let first = 1,
    second = 1;
  for (let i = 3; i <= n; i++) {
    let tmp = second;
    second = (first + second) % 1000000007;
    first = tmp;
  }
  return second;
};

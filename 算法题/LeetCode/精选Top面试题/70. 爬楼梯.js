/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n;
  let last = 1,
    pre = 2;
  for (let i = 3; i <= n; i++) {
    const tmp = pre;
    pre = last + pre;
    last = tmp;
  }
  return pre;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1;
  let res = 1;
  let m = n > 0 ? n : -n;
  while (m) {
    res *= x;
    m--;
  }
  return n > 0 ? res.toFixed(5) : (1 / res).toFixed(5);
};

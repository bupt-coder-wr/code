/**
 * 2021/09.27
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let res = 1;
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;
  while (n > 4) {
    n -= 3;
    res *= 3;
  }
  res *= n;
  return res;
};

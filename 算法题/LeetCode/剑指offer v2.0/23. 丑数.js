/**
 * 2021/09.09
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let a = 0,
    b = 0,
    c = 0;
  let dp = [1, 2];
  for (let i = 1; i <= n; i++) {
    let n2 = dp[a] * 2;
    let n3 = dp[b] * 3;
    let n5 = dp[c] * 5;
    dp[i] = Math.min(n2, n3, n5);
    if (dp[i] === n2) a++;
    if (dp[i] === n3) b++;
    if (dp[i] === n5) c++;
  }
  return dp[n - 1];
};

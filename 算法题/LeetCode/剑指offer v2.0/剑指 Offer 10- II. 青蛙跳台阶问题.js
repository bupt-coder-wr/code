/**
 * 2021/09.09
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let dp = [1, 1, 2];
  if (n <= 2) return dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
};

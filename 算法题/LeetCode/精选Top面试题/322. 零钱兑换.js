/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      const leftCoins = i - coin;
      if (leftCoins < 0 || dp[leftCoins] === Number.MAX_VALUE) {
        continue;
      }
      dp[i] = Math.min(dp[leftCoins] + 1, dp[i]);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

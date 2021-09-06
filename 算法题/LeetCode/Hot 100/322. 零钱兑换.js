/**
 * 2021/09.01
 */
// 120ms, 42.7MB
// dp
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_VALUE);
  // 需要初始化第一项
  dp[0] = 0;

  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    for (let coin of coins) {
      let leftCoins = curAmount - coin;
      if (leftCoins < 0 || dp[leftCoins] === Number.MAX_VALUE) {
        continue;
      }
      dp[curAmount] = Math.min(dp[leftCoins] + 1, dp[curAmount]);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

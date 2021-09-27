/**
 * 2021/09.27
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (prices.length < 2) return 0;
  let dp = Array(prices.length)
    .fill(0)
    .map(() => Array(2).fill(0));
  // dp[i][0] 表示第i天有股票 dp[i][1]表示第i天没有股票
  dp[0][0] = 0 - prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
  }
  return dp[prices.length - 1][1];
};

/**
 * 2020.10.31
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 */
// greedy
var maxProfit = function (prices) {
  let sum = 0;
  let n = prices.length;
  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    sum += diff > 0 ? diff : 0;
  }
  return sum;
};
// dp
var maxProfit = function (prices) {
  let len = prices.length;
  let dp = Array(len)
    .fill(0)
    .map((item) => Array(2));
  dp[0][0] = 0;
  dp[0][1] = 0 - prices[0];
  for (let i = 1; i < len; i++) {
    // 不持有
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 持有
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[len - 1][0];
};

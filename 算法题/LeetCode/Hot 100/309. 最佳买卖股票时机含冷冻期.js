/**
 * 2021/09.01
 * https://www.bilibili.com/video/BV1LZ4y1u7br?from=search&seid=17802412565437557963
 */
/**
   设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
   你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
   卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 */
/**
 * dp[i][0]表示第i天没有股票的最大利益
 *  分为：当天卖出 dp[i-1][1]+price[i] 和昨天就没有 dp[i-1][0] 股票两种情况
 * dp[i][0]表示第i天有股票的最大利益
 *  分为：当天买入 dp[i-2][0]-price[i] 和昨天就有 dp[i - 1][1] 股票两种情况
 *  注意：当天买入需要 i-2 无股票
 */
// 76ms, 39.7MB
// dp
var maxProfit = function (prices) {
  if (!prices.length || !prices) return 0;
  let dp = new Array(prices.length).fill(0).map((item) => new Array(2));

  dp[0][0] = 0;
  dp[0][1] = -1 * prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
    dp[i][1] = Math.max(
      (i - 2 >= 0 ? dp[i - 2][0] : 0) - prices[i],
      dp[i - 1][1]
    );
  }
  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);
};

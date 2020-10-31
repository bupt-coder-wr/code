/**
 * 2020.10.31
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 * 注意：你不能在买入股票前卖出股票。
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let min = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
/**
 * 记录【今天之前买入的最小值】
 * 计算【今天之前最小值买入，今天卖出的获利】，也即【今天卖出的最大获利】
 * 比较【每天的最大获利】，取最大值即可
 */

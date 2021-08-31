/**
 * @param {number[]} prices
 * @return {number}
 */
// 84ms, 47.6MB
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  // min为历史最低值，max为最大利润
  let min = prices[0],
    max = 0;
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return max;
};

// 112ms, 47.6MB
var maxProfit = function (prices) {
  let min = prices[0],
    max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    }
    max = Math.max(prices[i] - min, max);
  }
  return max;
};

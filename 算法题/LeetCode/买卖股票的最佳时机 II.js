/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;
  let result = [0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      result.push(prices[i] - prices[i - 1]);
    }
  }
  return result.reduce((x, y) => x + y);
};

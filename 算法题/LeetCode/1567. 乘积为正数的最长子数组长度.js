/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let positive = 0;
  let negative = 0;
  if (nums[0] > 0) {
    positive = 1;
  } else if (nums[0] < 0) {
    negative = 1;
  }
  let maxLen = positive;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive++;
      negative = negative > 0 ? negative + 1 : 0;
    } else if (nums[i] < 0) {
      let newNegative = positive + 1;
      let newpositive = negative > 0 ? negative + 1 : 0;
      positive = newpositive;
      negative = newNegative;
    } else {
      positive = 0;
      negative = 0;
    }
    maxLen = Math.max(maxLen, positive);
  }
  return maxLen;
};

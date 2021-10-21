/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums || !nums.length) return [];
  let res = [];
  if (k >= nums.length) return [Math.max(...nums)];
  for (let i = 0; i < nums.length - k + 1; i++) {
    let tmp = nums.slice(i, i + k);
    const max = Math.max(...tmp);
    res.push(max);
  }
  return res;
};

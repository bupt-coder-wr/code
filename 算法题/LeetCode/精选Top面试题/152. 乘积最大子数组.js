/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];
  let imin = 1,
    imax = 1;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      [imax, imin] = [imin, imax];
    }
    imax = Math.max(nums[i], imax * nums[i]);
    imin = Math.min(nums[i], imin * nums[i]);
    max = Math.max(max, imax);
  }
  return max;
};

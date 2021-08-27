/**
 * 2021/08.25
 * @param {number[]} nums
 */
var sortColors = function (nums) {
  let p0 = 0,
    i = 0,
    p2 = nums.length - 1;
  while (i <= p2) {
    if (nums[i] === 0) {
      [nums[p0], nums[i]] = [nums[i], nums[p0]];
      p0++;
    }
    if (nums[i] === 2) {
      [nums[p2], nums[i]] = [nums[i], nums[p2]];
      p2--;
      i--;
    }
    i++;
  }
  return nums;
};

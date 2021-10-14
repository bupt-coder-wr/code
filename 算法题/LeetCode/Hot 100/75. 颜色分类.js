/**
 * 2021/08.25
 * @param {number[]} nums
 */
var sortColors = function (nums) {
  let left = 0,
    i = 0,
    right = nums.length - 1;
  while (i <= right) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
    if (nums[i] === 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
      i--;
    }
    i++;
  }
  return nums;
};

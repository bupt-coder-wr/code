/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    let m = parseInt((i + j) / 2);
    if (nums[m] <= target) i = m + 1;
    else j = m - 1;
  }
  let right = i;
  // 若数组中无 target ，则提前返回
  if (j >= 0 && nums[j] != target) return 0;
  // 搜索左边界 right
  i = 0;
  j = nums.length - 1;
  while (i <= j) {
    let m = parseInt((i + j) / 2);
    if (nums[m] < target) i = m + 1;
    else j = m - 1;
  }
  let left = j;
  return right - left - 1;
};

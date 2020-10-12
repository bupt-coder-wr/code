/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const result = nums.indexOf(target);
  if (result != -1) {
    return result;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (target < nums[i]) {
        return i;
      }
    }
    return nums.length;
  }
};

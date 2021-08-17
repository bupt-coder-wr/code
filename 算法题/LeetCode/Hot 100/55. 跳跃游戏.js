/**
 * 2021/08.17
 */
var canJump = function (nums) {
  let max = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
      if (max >= len - 1) return true;
    }
  }
  return false;
};

/**
 * 2021/08.17
 */
// dp
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
// 80ms, 41.8MB
var canJump = function (nums) {
  if (nums.length === 1) return true;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i] + i);
    if (max >= nums.length - 1) {
      return true;
    }
    if (nums[i] === 0 && max <= i) {
      return false;
    }
  }
};

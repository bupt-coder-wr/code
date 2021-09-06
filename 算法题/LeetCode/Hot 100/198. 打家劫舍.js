/**
 * 2021/08.20
 * @param {number[]} nums
 * @return {number}
 */
// 68ms, 37.8MB
// dp
var rob = function (nums) {
  let len = nums.length;
  if (len <= 1) return len ? nums[0] : 0;
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    let tmp = second;
    second = Math.max(second, nums[i] + first);
    first = tmp;
  }
  return second;
};

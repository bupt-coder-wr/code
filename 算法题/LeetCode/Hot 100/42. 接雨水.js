/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;
  let left_max = [],
    leftMax = 0;
  let right_max = [],
    rightMax = 0;
  // 从左边看，遍历最大值
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[i]);
    left_max[i] = leftMax;
  }
  // 从右边看，遍历最大值
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, height[i]);
    right_max[i] = rightMax;
  }
  // 用左右视图的最小值减去当前柱子高度，进行累加，就是答案
  for (let i = 0; i < height.length; i++) {
    res += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return res;
};

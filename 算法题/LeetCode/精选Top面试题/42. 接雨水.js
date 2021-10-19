/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;
  let leftMax = [],
    rightMax = [];
  let max = height[0];
  for (let i = 0; i < height.length; i++) {
    max = Math.max(max, height[i]);
    leftMax.push(max);
  }
  max = height[height.length - 1];
  for (let i = height.length - 1; i >= 0; i--) {
    max = Math.max(max, height[i]);
    rightMax.unshift(max);
  }
  for (let i = 0; i < height.length; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};

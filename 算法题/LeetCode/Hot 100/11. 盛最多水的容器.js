/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let res = 0;
  while (left < right) {
    let cur = (right - left) * Math.min(height[left], height[right]);
    res = Math.max(res, cur);
    height[left] > height[right] ? right-- : left++;
  }
  return res;
};

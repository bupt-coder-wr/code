/**
 * 2020.11.10
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 */
/**
 * 使用双指针，分别放在数组头部和尾部，在高度不变的前提下，指针向内移动面积必减小，故每次移动边长较短的指针。
 */
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

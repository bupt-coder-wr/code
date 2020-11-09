/**
 * 2020.11.09
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 */
/**
 * 经典双指针问题，时间复杂度为O(n2)，与三数之和类似，多了一个比较差值的环节
 */
var threeSumClosest = function (nums, target) {
  let sub = Infinity;
  let res = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      let sum = nums[start] + nums[end] + nums[i];
      if (Math.abs(sum - target) < sub) {
        sub = Math.abs(sum - target);
        res = sum;
      }
      if (sum === target) {
        return target;
      } else if (sum < target) {
        start++;
      } else {
        end--;
      }
    }
  }
  return res;
};

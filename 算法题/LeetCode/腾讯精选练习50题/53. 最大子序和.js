/**
 * 2020.10.31
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
/**
 * 若当前指针所指元素之前的和小于0，则丢弃当前元素之前的和
 */
var maxSubArray = function (nums) {
  let max = nums[0], //记录最大和
    sum = 0; // 记录当前和
  nums.forEach((e) => {
    sum = Math.max(e, e + sum);
    max = Math.max(sum, max);
  });
  return max;
};

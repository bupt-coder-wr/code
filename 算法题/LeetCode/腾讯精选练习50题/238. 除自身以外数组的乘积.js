/**
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */
/**
 * 原数组：       [1       2       3       4]
 * 左部分的乘积：   1       1      1*2    1*2*3
 * 右部分的乘积： 2*3*4    3*4      4      1
 * 结果：        1*2*3*4  1*3*4   1*2*4  1*2*3*1
 */
var productExceptSelf = function (nums) {
  if (!nums || !nums.length) return 0;
  let res = [];
  let left = 1,
    right = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      left *= num[i - 1];
    }
    res[i] = left;  // 左部乘积
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i < nums.length - 1) {
      right *= nums[i + 1]; // 右部乘积
    }
    res[i] *= right;  // 左部 * 右部
  }
  return res;
};

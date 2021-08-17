/**
 * 2021/08.17
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;

  helper = (nums, target, index, sum) => {
    if (index === nums.length) {
      if (target === sum) {
        count++;
      }
    } else {
      helper(nums, target, index + 1, sum + nums[index]);
      helper(nums, target, index + 1, sum - nums[index]);
    }
  };

  helper(nums, target, 0, 0);
  return count;
};

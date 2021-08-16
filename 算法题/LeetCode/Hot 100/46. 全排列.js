/**
 * 2021/08.16
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 **/
var permute = function (nums) {
  let [result, list] = [[], []];
  if (!nums || !nums.length) return result;
  helper(nums, list);
  return result;

  function helper(nums, list) {
    // 出口
    if (nums.length === list.length) {
      result.push(list.slice(0));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 剪枝
      if (list.includes(nums[i])) continue;

      list.push(nums[i]);
      helper(nums, list);
      list.pop();
    }
  }
};

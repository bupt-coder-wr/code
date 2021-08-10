/**
 * 2020.10.31
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */
var majorityElement = function (nums) {
  nums.sort();
  return nums[parseInt(nums.length / 2)];
};

var majorityElement = function (nums) {
  if (!nums.length) return;
  let tar = nums[0],
    num = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === tar) {
      num++;
    } else {
      num--;
      if (num === 0) {
        tar = nums[i + 1];
        num = 1;
        i++;
      }
    }
  }
  return tar;
};

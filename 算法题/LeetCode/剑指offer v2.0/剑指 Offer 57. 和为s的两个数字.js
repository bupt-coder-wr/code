/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const set = new Set();
  for (let item of nums) {
    if (set.has(target - item)) {
      return [item, target - item];
    } else {
      set.add(item);
    }
  }
  return [];
};

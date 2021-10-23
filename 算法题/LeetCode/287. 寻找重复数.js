/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let set = new Set();
  for (let item of nums) {
    if (set.has(item)) {
      return item;
    } else {
      set.add(item);
    }
  }
};

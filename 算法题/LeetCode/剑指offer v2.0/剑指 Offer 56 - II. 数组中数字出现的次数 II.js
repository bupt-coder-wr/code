/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();
  for (let item of nums) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let [key, value] of map.entries()) {
    if (value !== 3) {
      return key;
    }
  }
};

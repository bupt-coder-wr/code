/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  const set = new Set();
  let min = Number.MAX_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  for (let item of nums) {
    if (item === 0) continue;
    min = Math.min(min, item);
    max = Math.max(max, item);
    if (set.has(item)) return false;
    else set.add(item);
  }
  return max - min < 5;
};

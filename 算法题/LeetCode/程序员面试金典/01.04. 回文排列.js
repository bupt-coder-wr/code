/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let map = new Map();
  let count = 0;
  for (let item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let item of map.values()) {
    if (item % 2 !== 0) {
      count++;
    }
  }
  return count < 2;
};

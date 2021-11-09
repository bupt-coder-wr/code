/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let target;
  for (let [key, value] of map.entries()) {
    if (value == 1) {
      target = key;
      break;
    }
  }
  return target ? s.indexOf(target) : -1;
};

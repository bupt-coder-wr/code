/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return s[i];
  }
  return " ";
};

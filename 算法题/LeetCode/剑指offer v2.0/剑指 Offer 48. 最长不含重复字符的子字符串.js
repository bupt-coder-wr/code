/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === " ") return 1;
  let map = new Map();
  s = s.split("");
  let max = 0,
    left = -1;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]));
    }
    max = Math.max(max, right - left);
    map.set(s[right], right);
  }
  return max;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  if (strs.length < 2) return strs[0];
  let first = strs[0];
  let second = strs[strs.length - 1];
  let len = Math.min(first.length, second.length);
  let i = 0;
  for (i; i < len; i++) {
    if (first[i] !== second[i]) {
      break;
    }
  }
  return first.slice(0, i);
};

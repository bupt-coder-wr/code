/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let pre = strs[0];
  for (let i = 1; i < strs.length; i++) {
    pre = lcp(pre, strs[i]);
  }
  return pre;

  function lcp(s1, s2) {
    let len = Math.min(s1.length, s2.length);
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (s1[i] === s2[i]) {
        count++;
      } else {
        break;
      }
    }
    return s1.slice(0, count);
  }
};

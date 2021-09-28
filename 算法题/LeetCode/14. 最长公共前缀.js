/**
 * 2021/09.28
 * @param {string[]} strs
 * @return {string}
 */
// 将原数组排序后，只需要比较第一个和最后一个即可
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  strs.sort();
  let s1 = strs[0],
    s2 = strs[strs.length - 1];
  let len = Math.min(s1.length, s2.length);
  let i = 0;
  for (i; i < len; i++) {
    if (s1[i] !== s2[i]) break;
  }
  return s1.slice(0, i);
};

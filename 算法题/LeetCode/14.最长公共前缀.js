/**
 * @param {string[]} strs
 * @return {string}
 */
// 横向查找
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let curStr = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let tmp = "";
    for (
      let index = 0;
      index < Math.min(curStr.length, strs[i].length);
      index++
    ) {
      if (curStr[index] === strs[i][index]) {
        tmp += curStr[index];
      } else {
        break;
      }
    }
    curStr = tmp;
    tmp = "";
  }
  return curStr;
};
// 纵向查找

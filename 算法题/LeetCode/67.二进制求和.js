/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let lenA = a.length;
  let lenB = b.length;
  let maxLen = Math.max(lenA, lenB);
  lenA > lenB ? b.padStart(lenA, "0") : a.padStart(lenB, "0");

  let tmp = 0,
    res = "";
  for (let i = a.length - 1; i >= 0; i++) {
    if (tmp + Number(a[i]) + Number(b[i]) == 2) {
      tmp = 1;
      res = res + 0;
    }
  }
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  s = s1.split("").sort().join("");
  t = s2.split("").sort().join("");
  return s === t;
};

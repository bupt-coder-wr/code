/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  if (n >= s.length) return s;
  return s.slice(n) + s.slice(0, n);
};

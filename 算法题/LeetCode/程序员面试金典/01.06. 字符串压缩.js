/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let first = 0,
    second = 0;
  let res = "";
  while (second < S.length) {
    if (S[second] === S[first]) {
      second++;
    } else {
      const tmp = S[first] + (second - first);
      res += tmp;
      first = second;
    }
  }
  res += S[first] + (second - first);
  return S.length <= res.length ? S : res;
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => {
    return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
  });
  let cur = intervals[0];
  let res = [];

  for (let item of intervals) {
    if (item[0] > cur[1]) {
      res.push(cur);
      cur = item;
    } else {
      cur[1] = Math.max(cur[1], item[1]);
    }
  }
  if (cur.length !== 0) res.push(cur);
  return res;
};

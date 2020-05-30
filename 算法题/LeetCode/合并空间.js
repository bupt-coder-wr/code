/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let arr = [];
  for (let i = 0; i < intervals.length; i++) {
    for (let j = intervals[i][0]; j <= intervals[i][1]; j++) {
      arr[j] = true;
    }
  }
  console.log(arr);
};
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]);

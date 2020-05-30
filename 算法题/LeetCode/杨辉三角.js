/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 0) return [];
  let result = [[1]];
  if (numRows == 1) return result;
  result.push([1, 1]);
  if (numRows == 2) return result;
  let tmp = [];
  let i = 2;
  while (numRows > i) {
    tmp.unshift(1);
    tmp.push(1);
    for (let j = 1; j < result[i - 1].length; j++) {
      tmp.splice(j, 0, result[i - 1][j - 1] + result[i - 1][j]);
    }
    result.push(tmp);
    tmp = [];
    i++;
  }
  return result;
};
console.log(generate(5));

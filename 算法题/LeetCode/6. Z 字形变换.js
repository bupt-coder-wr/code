/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s
  let m = numRows
  let n = Math.ceil(s.length / (2 * numRows - 2)) * (numRows - 1)
  let array = Array(m)
    .fill(0)
    .map(() => Array(n))
  let lineCount = 0
  let i = 0
  j = 0
  for (let k = 0; k < s.length; k++) {
    array[i][j] = s[k]
    lineCount++
    if (lineCount < numRows) {
      i++
    } else {
      i--
      j++
    }
    if (i == 0) {
      lineCount = 0
    }
  }
  return array.map(item => item.join('')).join('')
}

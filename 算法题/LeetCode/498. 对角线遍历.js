/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length
  let n = mat[0].length
  let k = m + n - 2
  let res = []
  let flag = true
  for (let sum = 0; sum <= k; sum++) {
    let tmp = []
    for (let i = 0; i <= sum; i++) {
      if (i < m && sum - i < n) {
        // console.log(i, sum - i, mat[i][sum - i])
        tmp.push(mat[i][sum - i])
      }
    }
    if (flag) {
      tmp = tmp.reverse()
    }
    res = res.concat(tmp)
    flag = !flag
  }
  return res
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [],
    path = []
  candidates.sort((a, b) => a - b)
  const backtrack = (path, target, index) => {
    for (let i = index; i <= candidates.length; i++) {
      if (i != 0 && candidates[i] == candidates[i - 1]) continue
      if (target === 0) {
        result.push(path.slice(0))
        return
      }
      if (candidates[i] > target) {
        return
      }
      path.push(candidates[i])
      backtrack(path, target - candidates[i], index + 1)
      path.pop()
    }
  }
  backtrack(path, target, 0)
  return result
}
console.log(combinationSum2([1, 1, 7], 8))

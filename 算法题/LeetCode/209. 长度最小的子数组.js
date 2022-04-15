var minSubArrayLen = function (target, nums) {
  let i = 0,
    j = 0
  let sum = 0
  let res = Number.MAX_SAFE_INTEGER
  while (i <= nums.length) {
    if (sum >= target) {
      res = Math.min(res, i - j)
      sum -= nums[j]
      j++
    } else {
      sum += nums[i]
      i++
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res
}
console.log(minSubArrayLen(4, [1, 4, 4]))

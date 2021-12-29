/**
 * 2020.11.09
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 */
/**
 * 经典双指针问题，时间复杂度为O(n2)，与三数之和类似，多了一个比较差值的环节
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let res = 0
  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1,
      k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (Math.abs(sum - target) < min) {
        min = Math.abs(sum - target)
        res = sum
      }
      if (sum < target) {
        j++
      } else {
        k--
      }
    }
  }
  return res
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let len = nums.length
  if (len === 0) return [-1, -1]

  let firstPosition = findFirstPosition(nums, target)
  if (firstPosition === -1) {
    return [-1, -1]
  }
  let lastPosition = findLastPosition(nums, target)
  return [firstPosition, lastPosition]
  function findFirstPosition(nums, target) {
    let left = 0,
      right = nums.length - 1
    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] === target) {
        right = mid
      } else {
        right = mid - 1
      }
    }
    if (nums[left] === target) {
      return left
    }
    return -1
  }
  function findLastPosition(nums, target) {
    let left = 0,
      right = nums.length - 1
    while (left < right) {
      // 对于最后一个位置，这里的mid需要向上取整
      let mid = Math.floor((left + right + 1) / 2)
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] === target) {
        left = mid
      } else {
        right = mid - 1
      }
    }
    return right
  }
}

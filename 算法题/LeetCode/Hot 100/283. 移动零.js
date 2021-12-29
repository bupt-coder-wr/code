var moveZeroes = function (nums) {
  if (!nums) return null
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j++] = tmp
    }
  }
  return nums
}

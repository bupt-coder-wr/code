/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let nums = nums1.slice(0, m);
  let i = 0;
  while (n) {
    if (nums[i] < nums2[0]) {
      i++;
    } else {
      nums.splice(i, 0, nums2.shift());
      n--;
    }
  }
  return nums;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

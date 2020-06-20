/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  k = k % len;
  let arr1 = nums.splice(0, len - k);
  return nums.concat(arr1);
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

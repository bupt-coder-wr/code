/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  return nums.sort((a, b) => (b % 2) - (a % 2));
};
var exchange = function (nums) {
  let i = 0;
  j = nums.length - 1;
  while (i <= j) {
    while (i < j && nums[i] % 2 === 1) {
      i++;
    }
    while (i < j && nums[j] % 2 === 0) {
      j--;
    }
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
    if (j - i <= 1) break;
  }
  return nums;
};

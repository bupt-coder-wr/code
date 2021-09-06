/**
 * 2021/08.19
 * @param {number[]} nums
 * @return {number}
 */
// dp
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];
  let [max, imax, imin] = [0, 1, 1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      // 出现负数后，交换最大值和最小值
      let tmp = imax;
      imax = imin;
      imin = tmp;
    }
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);

    max = Math.max(max, imax);
  }
  return max;
};

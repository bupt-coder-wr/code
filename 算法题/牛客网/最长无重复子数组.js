/**
 * 描述
 * 给定一个数组arr，返回arr的最长无重复元素子数组的长度，无重复指的是所有数字都不相同。
 * 子数组是连续的，比如[1,3,5,7,9]的子数组有[1,3]，[3,5,7]等等，但是[1,3,7]不是子数组
 */
function maxLength(arr) {
  // write code here
  let map = new Map(),
    left = -1;
  let max = 0;
  for (let right = 0; right < arr.length; right++) {
    if (map.has(arr[right])) {
      // 不是 left = map.get(arr[i])
      left = Math.max(left, map.get(arr[right]));
    }
    max = Math.max(max, right - left);
    map.set(arr[right], right);
  }
  return max;
}
module.exports = {
  maxLength: maxLength,
};

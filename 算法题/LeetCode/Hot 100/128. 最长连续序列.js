/**
 * 2021/08.30
 */
// 时间复杂度：O(nlogn)
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  let maxOrdered = 1,
    order = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      order++;
    } else if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      order = 1;
    }
    maxOrdered = order > maxOrdered ? order : maxOrdered;
  }
  return maxOrdered;
};

// 时间复杂度O(n)
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    // 当前值是起点，没有左兄弟
    if (!set.has(nums[i] - 1)) {
      let cur = nums[i];
      let curlength = 1;
      // set.has()的时间复杂度是1
      while (set.has(cur + 1)) {
        cur++;
        curlength++;
      }
      max = Math.max(max, curlength);
    }
  }
  return max;
};

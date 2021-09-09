/**
 * 2020.11.01
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 */
/**
 * 从后往前走，先排大数
 */
var merge = function (nums1, m, nums2, n) {
  let p = m-- + n-- - 1;
  while (m >= 0 && n >= 0) {
    nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
  while (n >= 0) {
    nums1[p--] = nums2[n--];
  }
};

/**
 * 2020.11.15
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let array = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] > nums2[0]) {
      array.push(nums2.shift());
    } else {
      array.push(nums1.shift());
    }
  }
  if (nums1.length) array = array.concat(nums1);
  if (nums2.length) array = array.concat(nums2);
  // 奇数
  if (array.length % 2 === 1) {
    const pos = Math.floor(array.length / 2);
    return array[pos].toFixed(5);
  } else {
    // 偶数
    const pos = array.length / 2;
    const res = ((array[pos] + array[pos - 1]) / 2).toFixed(5);
    return res;
  }
};

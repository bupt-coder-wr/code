/**
 * 2020.11.08
 * 给你一个升序排列的整数数组 nums ，和一个整数 target 。
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。（例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] ）。
 * 请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 */

// 简单粗暴
var search = function (nums, target) {
  return nums.indexOf(target);
};

// 二分查找
var search = function (nums, target) {
  if (nums.length == 0) return -1;
  let start = 0,
    end = nums.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = Math.ceil((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;

    if (nums[start] <= nums[mid]) {
      // 左边有序
      // target在左边
      if (nums[start] <= target && target < nums[mid]) {
        mid = end - 1;
      } else {
        mid = start + 1;
      }
    } else {
      // 右边有序
      if (nums[mid] < target && target <= nums[end]) {
        mid = start + 1;
      } else {
        mid = end - 1;
      }
    }
  }
  return -1;
};

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
  function searchHelper(nums, left, right, target) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    let leftValue = nums[left];
    let rightValue = nums[right];
    let midValue = nums[mid];
    if (leftValue === target) return left;
    if (rightValue === target) return right;
    if (midValue === target) return mid;
    if (leftValue < midValue) {
      // 左边有序
      if (leftValue < target && target < midValue) {
        return searchHelper(nums, left + 1, mid - 1, target);
      } else {
        return searchHelper(nums, mid + 1, right - 1, target);
      }
    } else {
      // 右边有序
      if (midValue < target && target < rightValue) {
        return searchHelper(nums, mid + 1, right - 1, target);
      } else {
        return searchHelper(nums, left + 1, mid - 1, target);
      }
    }
  }
  return searchHelper(nums, 0, nums.length - 1, target);
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

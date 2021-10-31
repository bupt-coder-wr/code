/**
 * 2020.11.11
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function swap(nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  function heapify(nums, n, i) {
    if (i >= n) return;
    let c1 = 2 * i + 1;
    let c2 = 2 * i + 2;
    let max = i;
    if (c1 < n && nums[c1] > nums[max]) {
      max = c1;
    }
    if (c2 < n && nums[c2] > nums[max]) {
      max = c2;
    }
    if (max !== i) {
      swap(nums, max, i);
      heapify(nums, n, max);
    }
  }
  function buildHeap(nums, n) {
    let lastNode = n - 1;
    let parent = Math.floor((lastNode - 1) / 2);
    for (let i = parent; i >= 0; i--) {
      heapify(nums, n, i);
    }
  }
  buildHeap(nums, nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    swap(nums, i, 0);
    heapify(nums, i, 0);
  }
  console.log(nums);
  return nums[nums.length - k];
};

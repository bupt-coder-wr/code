/**
 * 2020.11.07
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */
/**
 * https://www.bilibili.com/video/BV15J41167kn?from=search&seid=13568105791183001580
 * 先对数组排序
 * 使用三个指针进行操作
 * 难点在于去重，需要在三个地方进行去重操作
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1,
        end = nums.length - 1;
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          res.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;
          // 关键去重
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++;
        } else {
          end--;
        }
      }
    }
  }
  return res;
};

var threeSum2 = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};
threeSum2([-2, 0, 1, 1, 2]);

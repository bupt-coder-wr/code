/**
 *
 * @param nums int整型一维数组 长度大于5且小于10
 * @param target int整型
 * @return int整型二维数组
 */
function findNumber(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let m = j + 1; m < nums.length - 1; m++) {
        for (let n = m + 1; n < nums.length; n++) {
          if (nums[i] + nums[j] + nums[m] + nums[n] === target) {
            result.push([nums[i], nums[j], nums[m], nums[n]]);
          }
        }
      }
    }
  }
  return result;
}
let nums = [5, 0, -6, 0, 6, -5];
let target = 0;
console.log(findNumber(nums, target));

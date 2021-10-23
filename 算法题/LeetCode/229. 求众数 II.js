/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let el1 = 0,
    el2 = 0,
    vot1 = 0,
    vot2 = 0;
  for (let item of nums) {
    if (vot1 > 0 && item === el1) {
      vot1++;
    } else if (vot2 > 0 && item === el2) {
      vot2++;
    } else if (vot1 === 0) {
      vot1++;
      el1 = item;
    } else if (vot2 === 0) {
      vot2++;
      el2 = item;
    } else {
      vot1--;
      vot2--;
    }
  }
  let count1 = 0,
    count2 = 0;
  for (let item of nums) {
    if (item === el1) count1++;
    if (item === el2) count2++;
  }
  let res = [];
  if (vot1 > 0 && count1 > Math.floor(nums.length / 3)) res.push(el1);
  if (vot2 > 0 && count2 > Math.floor(nums.length / 3)) res.push(el2);
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [[]];
  for (let item of nums) {
    tmp = JSON.parse(JSON.stringify(result));
    for (let subItem of result) {
      subItem.push(item);
    }
    result = result.concat(tmp);
  }
  return result;
};
subsets([1, 2, 3]);

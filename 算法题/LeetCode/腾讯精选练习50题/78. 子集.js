/**
 * 2020.11.02
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 */
/**
 * []
 * [] [1]
 * [] [1] [2] [1,2]
 * [] [1] [2] [1,2] [3] [1,3] [2,3] [1,2,3]
 */
var subsets = function (nums) {
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

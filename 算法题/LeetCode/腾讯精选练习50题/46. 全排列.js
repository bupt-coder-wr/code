/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 **/
var permute = function (nums) {
  let res = [];
  prem(nums, 0, nums.length - 1);
  console.log(res);
  function swap(array, p, q) {
    const tmp = array[p];
    array[p] = array[q];
    array[q] = tmp;
  }
  function prem(array, p, q) {
    if (p === q) {
      res.push(array.slice(0));
      console.log(array);
    } else {
      for (let i = p; i <= q; i++) {
        swap(array, p, i);
        prem(array, p + 1, q);
        swap(array, p, i);
      }
    }
  }
};

var permute = function (nums) {
  let res = [],
    len = nums.length,
    path = [],
    used = [];
  if (len === 0) return res;
  const dfs = (nums, path, depth, used) => {
    if (depth === len) {
      res.push(path.slice());
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(nums, path, depth + 1, used);
      path.pop();
      used[i] = false;
    }
  };
  dfs(nums, path, 0, used);
  return res;
};

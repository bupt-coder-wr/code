/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (a) {
  let res = [],
    path = [],
    used = Array(a.length).fill(false);
  a.sort((a, b) => a - b);

  const backtrack = (path, used) => {
    if (path.length === a.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < a.length; i++) {
      // 剪枝
      if (used[i]) continue;
      if (i > 0 && a[i] == a[i - 1] && !used[i - 1]) continue;

      path.push(a[i]);
      used[i] = true;
      backtrack(path, used);
      used[i] = false;
      path.pop();
    }
  };
  backtrack(path, used);
  return res;
};

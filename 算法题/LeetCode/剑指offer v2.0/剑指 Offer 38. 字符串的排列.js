/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let res = [],
    path = [],
    used = Array(s.length).fill(false);
  let a = s.split("");
  a.sort();

  const backtrack = (path, used) => {
    if (path.length === a.length) {
      res.push(path.slice().join(""));
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

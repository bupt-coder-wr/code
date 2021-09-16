/**
 * 给出一组可能包含重复项的数字，返回该组数字的所有排列。
 */
function permuteUnique(num) {
  // write code here
  let result = [],
    path = [];
  num.sort((a, b) => a - b);
  let visited = Array(num.length).fill(false);
  const backtrack = (num, path, visited) => {
    if (path.length === num.length) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < num.length; i++) {
      if (visited[i] === true) continue;
      if (i > 0 && num[i - 1] === num[i] && visited[i - 1] === false) continue;
      path.push(num[i]);
      visited[i] = true;
      backtrack(num, path, visited);
      visited[i] = false;
      path.pop();
    }
  };

  backtrack(num, path, visited);
  return result;
}
module.exports = {
  permuteUnique: permuteUnique,
};

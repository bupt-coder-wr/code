/**
 * 输入一个字符串，打印出该字符串中字符的所有排列，你可以以任意顺序返回这个字符串数组。例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */
function Permutation(str) {
  // write code here
  if (!str) return "";
  let tmpArray = str.split("").sort((a, b) => a - b); //Array
  let result = [],
    path = [];
  let visited = Array(str.length).fill(false);

  const backtrack = (path, array, visited) => {
    if (path.length === array.length) {
      result.push(path.join(""));
      return;
    }

    for (let i = 0; i < array.length; i++) {
      if (visited[i] === true) continue;
      if (i > 0 && array[i - 1] === array[i] && !visited[i - 1]) continue;
      path.push(array[i]);
      visited[i] = true;
      backtrack(path, array, visited);
      visited[i] = false;
      path.pop();
    }
  };

  backtrack(path, tmpArray, visited);
  return result;
}
module.exports = {
  Permutation: Permutation,
};

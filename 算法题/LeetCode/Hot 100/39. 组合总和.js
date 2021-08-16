/**
 * 2021/08.16
 * https://www.bilibili.com/video/BV1854y1m7WR?from=search&seid=7447930998911725326
 */

var combinationSum = function (candidates, target) {
  let [result, list] = [[], []];
  candidates.sort((a, b) => a - b);
  helper(candidates, 0, target);
  return result;

  function helper(candidates, index, target) {
    if (target === 0) {
      result.push(list.slice(0));
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      // 剪枝
      if (candidates[i] > target) break;
      // 回溯
      list.push(candidates[i]);
      helper(candidates, i, target - candidates[i]);
      list.pop();
    }
  }
};

/**
 * 2020.11.15
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/shou-hui-tu-jie-hen-you-ya-de-yi-dao-dfsti-by-hyj8/
 * 给定一个非空二叉树，返回其最大路径和。
 * 本题中，路径被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
 */
const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER; // 纪录保持者

  const dfs = (root) => {
    if (root == null) {
      // 遍历到null节点
      return 0;
    }
    const left = dfs(root.left); // 左子树提供的最大收益
    const right = dfs(root.right); // 右子树提供的最大收益

    const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
    maxSum = Math.max(maxSum, innerMaxSum); // 用它挑战一下最大纪录

    const outputMaxSum = root.val + Math.max(left, right); // 计算对外提供的最大和

    if (outputMaxSum < 0) {
      // 对外提供的路径和为负，直接返回0
      return 0;
    }
    return outputMaxSum; // 否则正常返回
  };

  dfs(root); // 递归的入口
  return maxSum;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;
  const dfs = (root) => {
    if (!root) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    const innerSum = left + root.val + right;
    max = Math.max(max, innerSum);
    const outerSum = Math.max(left, right) + root.val;
    if (outerSum < 0) return 0;
    return outerSum;
  };
  dfs(root);
  return max;
};

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
var sumNumbers = function (root) {
  const dfs = (root, preSum) => {
    if (!root) return 0
    let sum = 10 * preSum + root.val
    if (!root.left && !root.right) {
      return sum
    } else {
      return dfs(root.left, sum) + dfs(root.right, sum)
    }
  }
  return dfs(root, 0)
}

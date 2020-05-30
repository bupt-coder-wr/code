/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let val;
var isUnivalTree = function(root) {
  if (!root) return true;
  val = root.val;
  return dfs(root);
};
function dfs(node) {
  if (!node) return true;
  if (node.val !== val) return false;
  return dfs(node.left) && dfs(node.right);
}

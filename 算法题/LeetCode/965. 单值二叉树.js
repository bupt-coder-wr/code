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
var isUnivalTree = function (root) {
  if (!root) return true;
  const val = root.val;

  const dfs = (root) => {
    if (!root) return true;
    if (root.val !== val) return false;
    return dfs(root.left) && dfs(root.right);
  };
  
  return dfs(root);
};

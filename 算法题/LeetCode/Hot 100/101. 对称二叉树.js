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
var isSymmetric = function (root) {
  function isMirror(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    return (
      p.val === q.val && isMirror(p.left, q.right) && isMirror(q.left, p.right)
    )
  }
  return isMirror(root, root)
}

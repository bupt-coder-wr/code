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
  return isMirror(root, root);
  function isMirror(p, q) {
    if (p === null && q === null) {
      return true;
    } else if (p === null || q === null) {
      return false;
    }
    if (p.val === q.val) {
      return isMirror(p.left, q.right) && isMirror(p.right, q.left);
    }
    return false;
  }
};

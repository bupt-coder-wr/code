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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const check = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return q.val == p.val && check(p.left, q.right) && check(q.left, p.right);
  };
  return check(root, root);
};

/**
 * 2021/09.09
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isMirror = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return (
      p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
    );
  };
  return isMirror(root, root);
};

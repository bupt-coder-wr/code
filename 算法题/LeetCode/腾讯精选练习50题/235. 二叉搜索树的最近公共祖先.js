/**
 * 2020.10.31
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val === root.val) {
    return p;
  }
  if (q.val === root.val) {
    return q;
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

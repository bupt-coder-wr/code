/**
 * 2020.10.31
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q) return root
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}

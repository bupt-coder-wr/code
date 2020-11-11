/**
 * 2020.11.11
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 */
/**
  注意p,q必然存在树内, 且所有节点的值唯一!!!
  递归思想, 对以root为根的(子)树进行查找p和q, 如果root == null || p || q 直接返回root
  表示对于当前树的查找已经完毕, 否则对左右子树进行查找, 根据左右子树的返回值判断:
  1. 左右子树的返回值都不为null, 由于值唯一左右子树的返回值就是p和q, 此时root为LCA
  2. 如果左右子树返回值只有一个不为null, 说明只有p和q存在与左或右子树中, 最先找到的那个节点为LCA
**/
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  // 一个在左，一个在右
  if (left !== null && right !== null) return root;
  // 左边为空则在右，右边为空则在左
  else return left === null ? right : left;
};

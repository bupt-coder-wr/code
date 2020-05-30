/**
 * 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function TreeDepth(pRoot) {
  // write code here
  if (!pRoot) return 0;
  var nLeft = TreeDepth(pRoot.left);
  var nRight = TreeDepth(pRoot.rigth);
  return Math.max(nLeft, nRight) + 1;
}
/**
 * 解题思路：递归
 * 分别递归计算左孩子和右孩子的深度，在返回时将左右孩子的最大值加一
 */

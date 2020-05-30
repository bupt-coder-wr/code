/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 */
function isSymmetrical(pRoot) {
  // write code here
  if (!pRoot) return true;
  return judge(pRoot.left, pRoot.right);
}
function judge(left, right) {
  if (left === null) return right === null;
  if (right === null) return false;
  if (left.val !== right.val) return false;
  return judge(left.left, right.right) && judge(right.left, left.right);
}
/**
 * 解题思路：
 * 对于二叉树的解题思路已经有点感觉，但是还差点火候
 * 应该引入一个判断函数用于循环判断，然后以二叉树的根节点作为入口节点
 */

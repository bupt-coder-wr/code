/**
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
var path = [],
  stack = [];
function FindPath(root, expectNumber) {
  if (root === null) return [];
  path = [];
  callback(root, expectNumber);
  return path;
}
function callback(root, expectNumber) {
  stack.push(root.val);
  if (root.val === expectNumber && root.left === null && root.right === null) {
    path.push(stack.slice());
  } else {
    if (root.left !== null) {
      callback(root.left, expectNumber - root.val);
    }
    if (root.right !== null) {
      callback(root.right, expectNumber - root.val);
    }
  }
  stack.pop();
}
/**
 * 解题思路： 递归
 * 首先判断入参异常
 * 声明一个新函数用于递归，每次将根节点的val入栈，
 * 判断剩余值是否满足输出条件(当前节点为叶子节点&当前节点值为剩余值)
 * 否则判断是否还存在左右孩子，进行递归
 */

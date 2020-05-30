/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
  if (root === null || (root.left === null && root.right === null)) return;
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  if (root.left) Mirror(root.left);
  if (root.right) Mirror(root.right);
}
/**
 * 解题思路：递归
 * 设置终止条件
 * 左右孩子做交换
 * 分别递归左右孩子
 */

/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  // write code here
  let queue = [];
  let data = [];
  if (root !== null) {
    queue.push(root);
  }
  while (queue.length !== 0) {
    var node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    data.push(node.val);
  }
  return data;
}
/**
 * 解题思路：宽度遍历
 * 声明一个队列，每次将当前节点的左右孩子添加到队列中
 */

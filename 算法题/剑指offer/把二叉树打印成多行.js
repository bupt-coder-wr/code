/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 */
function Print(pRoot) {
  // write code here
  if (!pRoot) return [];
  let result = [],
    queue = [];
  queue.push(pRoot);
  while (queue.length) {
    let len = queue.length;
    let tmpArr = [];
    for (let i = 0; i < len; i++) {
      let tmp = queue.shift();
      tmpArr.push(tmp.val);
      if (tmp.left) queue.push(tmp.left);
      if (tmp.right) queue.push(tmp.right);
    }
    result.push(tmpArr);
  }
  return result;
}
/**
 * 解题思路：
 * 使用双循环，每次在遍历上一层的时候，将当前节点shift，并将他的孩子节点push进来，实现逐层打印
 */
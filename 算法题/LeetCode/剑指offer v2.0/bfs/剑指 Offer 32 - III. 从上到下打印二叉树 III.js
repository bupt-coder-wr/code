/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [],
    queue = [root],
    flag = true;
  while (queue.length) {
    let path = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      path.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (flag) {
      res.push(path.slice());
    } else {
      res.push(path.slice().reverse());
    }
    flag = !flag;
  }
  return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let res = [],
    stack = [];
  if (!root) return res;
  stack.push(root);
  while (stack.length) {
    let tmp = [];
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      tmp.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    let sum = tmp.reduce((x, y) => x + y);
    res.push(sum / tmp.length);
  }
  return res;
};

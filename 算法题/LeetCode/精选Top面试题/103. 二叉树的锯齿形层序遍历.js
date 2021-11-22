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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = [];
  let stack = [];
  if (!root) return res;
  stack.push(root);
  let flag = true;
  while (stack.length) {
    let length = stack.length;
    let tmp = [];
    for (let i = 0; i < length; i++) {
      const node = stack.shift();
      tmp.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    if (flag) {
      res.push(tmp.slice());
    } else {
      res.push(tmp.reverse().slice());
    }
    flag = !flag;
  }
  return res;
};

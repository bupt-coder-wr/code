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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  let res = [],
    path = [];

  const backtrack = (root, path, target) => {
    if (!root) return;
    path.push(root.val);
    if (!root.left && !root.right && root.val === target) {
      res.push(path.slice());
    }
    backtrack(root.left, path, target - root.val);
    backtrack(root.right, path, target - root.val);

    path.pop();
  };

  backtrack(root, path, target);
  return res;
};

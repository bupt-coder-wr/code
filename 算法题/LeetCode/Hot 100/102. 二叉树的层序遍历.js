/**
 * 2021/08.25
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  let q = [];
  if (!root) return [];
  q.push(root);
  while (q.length) {
    result.push([]);
    const curLength = q.length;
    for (let i = 0; i < curLength; i++) {
      const node = q.shift();
      result[result.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return result;
};

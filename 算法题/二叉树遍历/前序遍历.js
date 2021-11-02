// 迭代法
var preorderTraversal = function (root) {
  let stack = [];
  let res = [];
  if (!root) return res;
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res;
};

// 递归法
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  res.push(root.val);
  preorderTraversal(root.left, res);
  preorderTraversal(root.right, res);
};

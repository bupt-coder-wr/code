// 迭代法
var postorderTraversal = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    res.unshift(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return res;
};

// 递归法
var postorderTraversal = function (root, res = []) {
  if (!root) return res;
  postorderTraversal(root.left, res);
  postorderTraversal(root.left, res);
  res.push(root.val);
};

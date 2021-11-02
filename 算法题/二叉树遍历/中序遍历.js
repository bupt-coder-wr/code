// 迭代法
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let cur = root;
  while (root || stack.length) {
    if (root) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};

// 递归法
var inorderTraversal = function (root, res = []) {
  if (!root) return res;
  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);
  return res;
};

// 迭代法
var postorderTraversal = function (root, res = []) {
  if (!root) return res;
  const stack = [root];
  let cur = null;
  do {
    cur = stack.pop();
    res.push(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  } while (stack.length);
  return res.reverse();
};

// 递归法
var postorderTraversal = function (root, res = []) {
  if (!root) return res;
  postorderTraversal(root.left, res);
  postorderTraversal(root.left, res);
  res.push(root.val);
};

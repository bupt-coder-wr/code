var inorderTraversal = (root) => {
  const res = [];
  const midInorder = (root) => {
    if (!root) return;
    midInorder(root.left);
    res.push(root.val);
    midInorder(root.right);
  };
  midInorder(root);
  return res;
};

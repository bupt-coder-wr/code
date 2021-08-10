var diameterOfBinaryTree = function (root) {
  let max = 0;
  const getDepth = (root) => {
    if (!root) return 0;
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    if (right + left > max) {
      max = right + left;
    }
    return Math.max(left, right) + 1;
  };
  getDepth(root);

  return max;
};

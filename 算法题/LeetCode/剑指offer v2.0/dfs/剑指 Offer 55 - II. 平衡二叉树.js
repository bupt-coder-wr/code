/**
 * 2021/09.10
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  const getHeight = (root) => {
    if (!root) return 0;
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    return Math.max(left, right) + 1;
  };
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  }
  return false;
};

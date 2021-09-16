/**
 * 2021/09.09
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return null;
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
};

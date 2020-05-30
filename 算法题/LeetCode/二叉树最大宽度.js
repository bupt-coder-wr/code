/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  var depth = getDepth(root);
  return 2 ** (depth - 1);
};

function getDepth(root) {
  if (!root) return 0;
  var nLeft = getDepth(root.left);
  var nRight = getDepth(root.right);
  return Math.max(nLeft + nRight) + 1;
}

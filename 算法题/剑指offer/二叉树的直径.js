/**
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let result = 0;
  getDepth(root);
  return result;
  function getDepth(node) {
    if (!root) return 0;
    let nLeft = node.left ? getDepth(node.left) + 1 : 0;
    let nRight = node.right ? getDepth(node.right) + 1 : 0;
    result = Math.max(left + right, result);
    return Math.max(nLeft, nRight);
  }
};

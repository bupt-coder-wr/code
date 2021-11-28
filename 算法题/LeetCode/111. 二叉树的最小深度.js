/**
 * 与求最大深度不同，在递归时，返回值不同
 * 左右孩子都有时，则取小并加1
 * 左右孩子有一个为空时，则left + right + 1
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  let left = minDepth(root.left)
  let right = minDepth(root.right)
  return left && right ? Math.min(left, right) + 1 : left + right + 1
}

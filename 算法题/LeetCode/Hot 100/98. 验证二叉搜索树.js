/**
 * 2021.10.14
 * @param {TreeNode} root
 * @return {boolean}
 */
// 中序遍历为升序即可
var isValidBST = function (root) {
  let order = [];
  const midOrder = (root) => {
    if (root.left) midOrder(root.left);
    order.push(root.val);
    if (root.right) midOrder(root.right);
  };
  midOrder(root);
  for (let i = 0; i < order.length - 1; i++) {
    if (order[i] >= order[i + 1]) {
      return false;
    }
  }
  return true;
};

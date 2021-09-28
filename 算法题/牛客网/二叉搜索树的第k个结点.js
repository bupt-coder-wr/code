/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k) {
  // write code here
  if (!pRoot || k === 0) return null;
  let res = [];
  const midOrder = (node) => {
    if (!node) return;
    midOrder(node.left);
    res.push(node);
    midOrder(node.right);
  };
  midOrder(pRoot);
  return res[k - 1];
}
module.exports = {
  KthNode: KthNode,
};

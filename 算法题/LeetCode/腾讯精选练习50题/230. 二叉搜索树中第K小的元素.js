/**
 * 2020.11.11
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
 */
/**
 * 使用中序遍历，遍历到的第k个元素就是第k小的元素
 */
var kthSmallest = function (root, k) {
  let stack = [];
  midSearch(root, stack, k);
  return stack[stack.length - 1];

  function midSearch(root, stack, k) {
    if (root === null) return;
    midSearch(root.left, stack, k);
    if (stack.length === k) {
      return;
    }
    stack.push(root.val);
    midSearch(root.right, stack, k);
  }
};

var kthSmallest = function (root, k) {
  let res = [];
  const bts = (node) => {
    if (!node) return;
    bts(node.left);
    res.push(node.val);
    bts(node.right);
  };
  bts(root);
  return res[k - 1];
};

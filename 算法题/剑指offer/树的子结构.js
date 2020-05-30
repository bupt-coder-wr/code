/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */
/**
 *
 * @param TreeNode root1
 * @param TreeNode root2
 */
function HasSubtree(root1, root2) {
  let result = false;
  // 当两个节点都不为空的时候进入，否则直接返回结果
  if (root1 !== null && root2 !== null) {
    // 如果找到根相同的值，开始比较子结构
    if (root1.val === root2.val) {
      result = isTreeOwnSub(root1, root2);
    }
    // 若未找到，将root1的左孩子作为根
    if (!result) {
      result = HasSubtree(root1.left, root2);
    }
    // 若还未找到，将root1的右孩子作为根
    if (!result) {
      result = HasSubtree(root1.right, root2);
    }
  }
  return result;

  function isTreeOwnSub(node1, node2) {
    // 若小树到头，返回true
    if (node2 === null) {
      return true;
    }
    // 若大树到头，则返回false
    if (node1 === null) {
      return false;
    }
    // 若存在未匹配，则返回false
    if (node1.val !== node2.val) {
      return false;
    }
    // 分别比较左右孩子
    return (
      isTreeOwnSub(node1.left, node2.left) &&
      isTreeOwnSub(node1.right, node2.right)
    );
  }
}

/**
 * 2021/09.02
 */
/**
 * f(node),g(node)分别表示node节点包含和不包含时所表示的最大值
 * f(node)  存在时，其子节点必不存在 (g.get(root.left) || 0) + (g.get(root.right) || 0)
 * g(node)不存在时，考虑其子节点存在和不存在两种情况的最大值
 */
// 88ms, 43.7MB
// dp
var rob = function (root) {
  let f = new Map(); // node存在
  let g = new Map(); // node不存在

  const dfs = (root) => {
    if (root === null) return;

    dfs(root.left);
    dfs(root.right);

    f.set(root, root.val + (g.get(root.left) || 0) + (g.get(root.right) || 0));
    g.set(
      root,
      Math.max(f.get(root.left) || 0, g.get(root.left) || 0) +
        Math.max(f.get(root.right) || 0, g.get(root.right) || 0)
    );
  };

  dfs(root);
  return Math.max(g.get(root) || 0, f.get(root) || 0);
};

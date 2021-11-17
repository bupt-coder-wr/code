var levelOrder = function (root) {
  if (!root) return [];
  let res = [],
    list = [];
  list.push(root);
  while (list.length) {
    const len = list.length;
    let a = [];
    for (let i = 0; i < len; i++) {
      const node = list.shift();
      a.push(node.val);
      if (node.left) list.push(node.left);
      if (node.right) list.push(node.right);
    }
    res.push(a.slice());
  }
  return res;
};

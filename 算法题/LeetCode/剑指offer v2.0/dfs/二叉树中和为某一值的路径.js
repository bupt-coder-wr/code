var pathSum = function (root, target) {
  let res = [],
    path = [];

  const backtrack = (root, path, target) => {
    if (!root) return;
    path.push(root.val);
    if (!root.left && !root.right && root.val === target) {
      res.push(path.slice());
    }
    backtrack(root.left, path, target - root.val);
    backtrack(root.right, path, target - root.val);

    path.pop();
  };

  backtrack(root, path, target);
  return res;
};

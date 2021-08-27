/**
 * 2021/08.25
 * @param {*} root
 * @returns
 */
var flatten = function (root) {
  if (!root) return root;
  let list = [];
  const preConsole = (root) => {
    if (root) {
      list.push(root);
      preConsole(root.left);
      preConsole(root.right);
    }
  };
  preConsole(root);
  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1],
      curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};

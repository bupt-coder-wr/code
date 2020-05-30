// 前序遍历
preTraversal = function () {
  this._pre(this.root)
}
_pre = function (node) {
  if (node) {
    console.log(node.value);
    _pre(node.left);
    _pre(node.right);
  }
}

// 中序遍历
midTraversal = function () {
  this._mid(this.root)
}
_mid = function (node) {
  if (node) {
    _mid(node.left);
    console.log(node.value);
    _mid(node.right)
  }
}

// 后序遍历
backTraversal = function () {
  this._back(this.node);
}
_back = function (node) {
  if (node) {
    _back(node.left);
    _back(node.right);
    console.log(node.value);
  }
}
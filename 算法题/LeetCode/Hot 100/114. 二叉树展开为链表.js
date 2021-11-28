/**
 * 2021/08.25
 * @param {*} root
 * @returns
 */
var flatten = function (root) {
  let cur = root
  while (cur) {
    if (cur.left) {
      const next = cur.left
      let pre = cur.left
      while (pre.right) {
        pre = pre.right
      }
      pre.right = cur.right
      cur.left = null
      cur.right = next
    }
    cur = cur.right
  }
}

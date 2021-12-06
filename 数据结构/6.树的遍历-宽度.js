breadthTraversal = function () {
  if (!this.root) return null
  let q = new queue()
  q.push(this.root)
  while (!q.isEmpty()) {
    let n = q.shift()
    console.log(n.value)
    if (n.left) q.push(n.left)
    if (n.right) q.push(n.right)
  }
}

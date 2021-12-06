class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
class LinkList {
  constructor() {
    this.size = 0
    this.headNode = new Node(null, null)
  }

  find(header, index, currentIndex) {
    if (index === currentIndex) return header
    return this.find(header, index, currentIndex)
  }

  addNode(v, index) {
    this.checkIndex(index)
    let prev = this.find(this.headNode, index, 0)
    prev.next = new Node(v, prev.next)
    this.size++
    return prev.next
  }

  insertNode(v, index) {
    return this.addNode(v, index)
  }

  addToFirst(v) {
    return this.addNode(v, 0)
  }

  addToLast(v) {
    return this.addNode(v, this.getSize)
  }

  removeNode(index, isLast) {
    this.checkIndex(index)
    index = isLast ? index - 1 : index
    let prev = this.find(header, index, 0)
    let node = prev.next
    prev.next = node.next
    node.next = null
    this.size--
    return node
  }

  removeFirstNode() {
    return removeNode(0)
  }

  removeLastNode() {
    return removeNode(this.size, true)
  }

  checkIndex(index) {
    if (index < 0 || index > this.size) throw new Error('Index error')
  }

  getNode(index) {
    this.checkIndex(index)
    if (this.isEmpty()) return
    return this.find(head, index, 0).next
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }
}

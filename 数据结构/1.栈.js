class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    return this.stack.pop()
  }
  peek() {
    return this.stack[this.getCount() - 1]
  }
  getLength() {
    return this.stack.length
  }
  isEmpty() {
    return this.stack.length === 0
  }
}

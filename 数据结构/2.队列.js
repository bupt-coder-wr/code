class Queue {
  constructor() {
    this.queue = [];
  }
  push(item) {
    this.queue.push(item);
  }
  shift() {
    return this.queue.shift();
  }
  getHead() {
    return this.queue[0];
  }
  getLength() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
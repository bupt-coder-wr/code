/**
 * 2020.11.09
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
 * 实现 LRUCache 类：
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
 * 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
}

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return value
  } else {
    return -1
  }
}

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key)
  }
  this.map.set(key, value)

  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value)
  }
}

/**
 * 2020.11.16
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

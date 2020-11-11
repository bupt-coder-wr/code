/**
 * 2020.11.11
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */
// 常规思路
var sortList = function (head) {
  if (!head) return head;
  let array = [];
  while (head !== null) {
    array.push(head.val);
    head = head.next;
  }
  array.sort((a, b) => a - b);
  let node = new ListNode();
  head = node;
  while (array.length) {
    node.next = new ListNode();
    node = node.next;
    node.val = array.shift();
  }
  return head.next;
};

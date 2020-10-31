/**
 * 反转一个单链表。
 */
// 递归反转
var reverseList = function (head) {
  // 1. 求解基本问题
  if (head === null || head.next === null) return head;
  let res = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return res;
};

// 循环反转
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let pre = null;
  while (head) {
    var next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};

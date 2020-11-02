/**
 * 2020.10.31
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

/**
 * pre永远在cur和next的前面
 * next的作用为占位，防止cur.next丢失
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let pre = null;
  let cur = head;
  let next = head;
  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

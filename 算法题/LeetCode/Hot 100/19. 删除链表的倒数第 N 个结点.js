/**
 * 2021/08.14
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * @param {*} head
 * @param {*} n
 * @returns
 */
var removeNthFromEnd = function (head, n) {
  let pre = new ListNode(0, head);
  let first = head;
  let second = pre;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return pre.next;
};

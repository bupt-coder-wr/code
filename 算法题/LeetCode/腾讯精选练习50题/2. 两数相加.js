/**
 * 2020.11.08
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let sum = new ListNode(0);
  let res = sum;
  let carry = 0;
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sumVal = v1 + v2 + carry;
    carry = sumVal >= 10 ? 1 : 0;
    sum.next = new ListNode(sumVal % 10);
    sum = sum.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) {
    sum.next = new ListNode(1);
  }
  return res.next;
};

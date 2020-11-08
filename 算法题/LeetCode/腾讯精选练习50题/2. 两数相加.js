/**
 * 2020.11.08
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode();
  let cur = head;
  let carry = 0;
  let sum = 0;
  while (l1 || l2) {
    let node = new ListNode();
    if (l1 && !l2) {
      sum = l1.val + carry;
      node.val = sum % 10;
      carry = sum >= 10 ? 1 : 0;
      l1 = l1.next;
    } else if (!l1 && l2) {
      sum = l2.val + carry;
      node.val = sum % 10;
      carry = sum >= 10 ? 1 : 0;
      l2 = l2.next;
    } else {
      sum = l1.val + l2.val + carry;
      node.val = sum % 10;
      carry = sum >= 10 ? 1 : 0;
      l1 = l1.next;
      l2 = l2.next;
    }
    cur.next = node;
    cur = cur.next;
  }
  if (carry) {
    node = new ListNode(1);
    cur.next = node;
  }
  return head;
};

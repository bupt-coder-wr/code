/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let p = new ListNode(0);
  let res = p;
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sumVal = v1 + v2 + carry;
    carry = sumVal >= 10 ? 1 : 0;
    p.next = new ListNode(sumVal % 10);
    p = p.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) p.next = new ListNode(1);
  return res.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  let p = new ListNode(0);
  p.next = head;
  let first = p,
    second = head;
  while (k) {
    second = second.next;
    k--;
  }
  while (second) {
    first = first.next;
    second = second.next;
  }
  return first.next.val;
};

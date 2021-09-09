/**
 * 2021/09.09
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  // let node = head
  let pre = head,
    last = head;
  while (k) {
    pre = pre.next;
    k--;
  }
  while (pre) {
    pre = pre.next;
    last = last.next;
  }
  return last;
};

/**
 * 2021/09.09
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let node = head;
  if (head.val === val) return head.next;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
      break;
    }
    node = node.next;
  }
  return head;
};

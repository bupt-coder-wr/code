/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dumpHead = new ListNode(0)
  dumpHead.next = head
  let tmp = dumpHead
  while (tmp.next && tmp.next.next) {
    let node1 = tmp.next
    let node2 = tmp.next.next
    tmp.next = node2
    node1.next = node2.next
    node2.next = node1
    tmp = node1
  }
  return dumpHead.next
}

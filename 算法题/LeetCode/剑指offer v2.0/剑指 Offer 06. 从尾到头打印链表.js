/**
 * 2021/09.09
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let result = [];
  while (head) {
    result.unshift(head.val);
    head = head.next;
  }
  return result;
};

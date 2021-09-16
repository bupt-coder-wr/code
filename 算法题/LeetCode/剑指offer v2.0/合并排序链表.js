/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists === null) return null;
  if (lists.length === 1) return lists[0];
  const array = [];
  lists.forEach((el) => {
    let head = el;
    while (head) {
      array.push(head.val);
      head = head.next;
    }
  });
  array.sort((a, b) => a - b);
  let head = new ListNode(),
    pre = head;
  for (let i = 0; i < array.length; i++) {
    pre.next = new ListNode(array[i]);
    pre = pre.next;
  }
  return head.next;
};

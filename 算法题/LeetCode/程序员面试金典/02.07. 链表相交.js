/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  const getLength = (node) => {
    if (!node) return 0;
    let len = 0;
    while (node) {
      len++;
      node = node.next;
    }
    return len;
  };
  let l1 = getLength(headA);
  let l2 = getLength(headB);
  let ha = headA,
    hb = headB;
  let sub = l1 > l2 ? l1 - l2 : l2 - l1;
  while (sub) {
    if (l1 > l2) {
      ha = ha.next;
    } else {
      hb = hb.next;
    }
    sub--;
  }
  while (ha) {
    if (ha === hb) {
      return ha;
    }
    ha = ha.next;
    hb = hb.next;
  }
  return null;
};

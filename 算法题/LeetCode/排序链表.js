/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归 栈溢出
var sortList = function(head) {
  if (!head || !head.next) return head;
  let slow = head,
    fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow.next;
  mid.next = null;
  let left = sortList(head);
  let right = sortList(mid);
  let h = new ListNode(0);
  let res = h;
  while (left && right) {
    if (left.val < right.val) {
      h.next = left;
      left = left.next;
    } else {
      h.next = right;
      right = right.next;
    }
    h = h.next;
  }
  h.next = left ? left : right;
  return res.next;
};

var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let len = getLength(head);
  let sentry = new ListNode();
  sentry.next = head;
  for (let i = 1; i < len; i++) {
    let prev = sentry;
    let cur = sentry.next;
    while (cur) {
      var left = cur;
      var right = split(left, i);
      cur = split(right, i);
      prev.next = merge(left, right);
      while (prev.next) {
        prev = prev.next;
      }
    }
  }

  function split(head, step) {
    if (!head) return null;
    for (let i = 0; !head.next && i < step; i++) {
      head = head.next;
    }
    let right = head.next;
    return right;
  }
  function getLength(head) {
    let len = 0;
    let p = head;
    while (p) {
      len++;
      p = p.next;
    }
    return len;
  }
  function merge(l1, l2) {
    let preHead = new ListNode();
    let cur = preHead;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur.next = l1 ? l1 : l2;
    }
    return preHead.next;
  }
};

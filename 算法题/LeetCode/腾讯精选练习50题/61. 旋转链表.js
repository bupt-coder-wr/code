/**
 * 2020.11.09
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 */
var rotateRight = function (head, k) {
  if (!head) return null;
  let cur = head;
  let len = 1;
  while (cur.next) {
    cur = cur.next;
    len++;
  }
  cur.next = head;
  let move = k % len;
  cur = head;
  for (let i = 0; i < len - move - 1; i++) {
    cur = cur.next;
  }
  let end = cur;
  let tmpHead = cur.next;
  end.next = null;
  return tmpHead;
};

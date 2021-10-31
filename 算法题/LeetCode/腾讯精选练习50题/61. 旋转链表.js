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
// 先把链表连成环，然后计算断开的位置
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let length = 0;
  let cur = head;
  while (cur) {
    length++;
    if (cur.next === null) {
      cur.next = head;
      break;
    } else {
      cur = cur.next;
    }
  }
  cur = head;
  let move = length - (k % length) - 1;
  while (move) {
    cur = cur.next;
    move--;
  }
  const res = cur.next;
  cur.next = null;
  return res;
};

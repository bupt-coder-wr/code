var isPalindrome = function (head) {
  let stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = stack.length - 1; i < j; i++, j--) {
    if (stack[i] != stack[j]) return false;
  }
  return true;
};

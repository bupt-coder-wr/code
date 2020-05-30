function Sum_Solution(n) {
  // write code here
  let result = n;
  (n > 0) && (result+=Sum_Solution(n - 1))
  return result;
}
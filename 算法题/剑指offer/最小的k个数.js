function GetLeastNumbers_Solution(input, k) {
  // write code here
  input.sort((a, b) => a - b);
  return input.length >= k ? input.slice(0, k) : [];
}
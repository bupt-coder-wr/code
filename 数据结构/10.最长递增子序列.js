function lis(n) {
  if (n.length === 0) return 0;
  let array = new Array(n.length).fill(1)
  for (let i = 1; i < n.length; i++) {
    for (let j = 0; j < i; j++) {
      if (n[i] > n[j]) {
        array[i] = Math.max(array[i], array[j] + 1)
      }
    }
  }
  let result = Math.max(...array)
  return result;
}
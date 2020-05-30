function bubble(array) {
  if (!array instanceof Array) return
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      swap(array, i, minIndex)
    }
  }
  return array;
}
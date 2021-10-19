function shuffle(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const p = parseInt(Math.random() * len);
    [arr[i], arr[p]] = [arr[p], arr[i]];
  }
}

a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffle(a);
console.log(a);

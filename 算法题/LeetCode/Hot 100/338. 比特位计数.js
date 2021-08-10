var countBits = function (n) {
  let bits = new Array(n + 1).fill(0);
  const countOnes = (x) => {
    let ones = 0;
    while (x) {
      x &= x - 1;
      ones++;
    }
    return ones;
  };
  for (let i = 0; i < bits.length; i++) {
    bits[i] = countOnes(i);
  }
  return bits;
};

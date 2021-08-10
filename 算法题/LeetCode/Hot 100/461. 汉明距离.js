var hammingDistance = function (x, y) {
  let tmp = x ^ y;
  let res = 0;
  while (tmp) {
    tmp &= tmp - 1;
    res++;
  }
  return res;
};

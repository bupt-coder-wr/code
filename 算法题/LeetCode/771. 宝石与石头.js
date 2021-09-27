var numJewelsInStones = function (J, S) {
  return S.split("").filter((i) => J.includes(i)).length;
};

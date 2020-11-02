/**
 * 实现sum(a)(b) = a + b
 */
const sum = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(sum(1)(2));

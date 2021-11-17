// 非单例
// function notSingle() {
//   return {
//     a: 1,
//   };
// }

// const a = notSingle();
// const b = notSingle();
// console.log(a === b);

// 单例 存在风险
// const unique = null;
// function createSingle() {
//   const obj = { a: 1 };
//   if (!unique) {
//     unique = obj;
//   }
//   return unique;
// }

// const a1 = createSingle();
// const b1 = createSingle();
// console.log(a1 === b1);

// 单例
function Person(name, age) {}
const createSingle = (function (name, age) {
  let unique = null;
  return function () {
    if (!unique) {
      unique = new Person();
    }
    return unique;
  };
})();
const a1 = createSingle();
const b1 = createSingle();
console.log(a1 === b1);

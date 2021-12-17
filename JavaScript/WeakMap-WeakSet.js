// const map = new Map();
// let a = {};
// map.set(a, "123");
// console.log("map", map);
// a = null;
// console.log("a", a);
// console.log("map", map);
// console.log("------------------");
// const weakMap = new WeakMap();
// let b = { a: "a" };
// weakMap.set(b, "123");
// console.log(weakMap.has(b));
// b = null;
// console.log("b", b);
// console.log(weakMap.has(b));

const set = new Set()
a = {}
set.add(a)
a = null
console.log(set.has(a))

const weakSet = new WeakSet()
a = {}
weakSet.add(a)
a = null
console.log(weakSet.has(a))

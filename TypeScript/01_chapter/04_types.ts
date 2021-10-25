// object表示一个对象
let a: object;
a = {};
a = function () {};

// {} 用来指定对象中可以包含哪些属性
// 在属性名后面加上？，表示可选属性
let b: { name: string; age?: number };
b = { name: "Tars" };

let c: { name: string; [propName: string]: any };
c = { name: "Tars", age: 19 };

/**
 * 设置函数结构的类型声明：
 *    语法：（形参:类型，形参:类型...） => 返回值
 */
let d: (a: number, b: number) => number;
d = function (a: number, b: number) {
  return a + b;
};

/**
 * 语法：
 *  类型[]
 *  Array<类型>
 */
let e: String[];
let f: number[];
let g: Array<number>;

/**
 * 元组，元组就是固定长度的数组
 *  语法：[类型，类型，类型]
 */
let h: [string, string];
h = ["hello", "world"];

/**
 * enum 枚举
 *
 */
enum Gender {
  Male,
  Female,
}
let i: { name: string; gender: Gender };
i = {
  name: "Tars",
  gender: Gender.Male,
};
console.log(i.gender === Gender.Male);
// & 表示同时
let j: { name: string } & { age: number };
j = { name: "Tars", age: 19 };

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
k = 1;

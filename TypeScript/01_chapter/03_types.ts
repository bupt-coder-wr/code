// 可以直接使用字面量进行类型申明
let a: 10;
a = 10;

// 可以使用 | 来连接多个类型 (联合类型)
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string;
c = false;
c = "hello";

// any 表示的是任意类型，设置 any 后相当于关闭了 TS 的类型检测
let d: any;
d = 10;
d = "hello";

// unknow 表示未知类型
let e: unknown;
e = 10;
e = "hello";

let s: string;
s = d;
// unknown  实际上是一个类型安全的any
// s = e;

// 类型断言 可以告诉解析器变量的实际类型
/**
 * 语法：
 *  变量 as 类型
 *  <类型>变量
 */
s = e as string;
s = <string>e;

// void 用来表示空，表示没有返回值的函数
function fn(): void {}

// never 表示永远不会返回结果
function fn2(): never {
  throw new Error();
}

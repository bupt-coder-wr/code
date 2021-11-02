// 建议阅读全文
// https://juejin.cn/post/6844904083707396109

// 错误 1
var a = 1;
function foo() {
  var a = 2;
  function inner() {
    console.log(this.a); // 1， this指向windows
  }
  inner();
}
foo();

// 错误 2
var obj1 = {
  a: 1,
};
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a); // 2
  },
  foo2: function () {
    console.log(this); // obj2
    function inner() {
      console.log(this); // windows， this指向windows
      console.log(this.a); // 3
    }
    inner();
  },
};
var a = 3;
obj2.foo1();
obj2.foo2();

// 错误 3
function foo() {
  console.log(this.a);
}
var obj = { a: 1 };
var a = 2;

foo();
foo.call(obj);
foo().call(obj);

// 错误 4
function foo() {
  console.log(this.a);
  return function () {
    console.log(this.a);
  };
}
var obj = { a: 1 };
var a = 2;

foo.call(obj)(); // foo()虽然绑定到了obj对象，最后调用匿名函数的却是windows

// 重点题 但第一遍都做对了
var obj = {
  a: "obj",
  foo: function () {
    console.log("foo:", this.a);
    return function () {
      console.log("inner:", this.a);
    };
  },
};
var a = "window";
var obj2 = { a: "obj2" };

obj.foo()();
obj.foo.call(obj2)();
obj.foo().call(obj2);
// answer
// foo: obj
// inner: windows
// foo: obj2
// inner: windows
// foo: obj
// inner: obj2

// 高端题
var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a;
    return function (c) {
      console.log(this.a + b + c);
    };
  },
};
var a = 2;
var obj2 = { a: 3 };

obj.foo(a).call(obj2, 1);
obj.foo.call(obj2)(1);
// 6
// 6

// 夹带箭头函数
var obj = {
  name: "obj",
  foo1: () => {
    console.log(this.name);
  },
  foo2: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
};
var name = "window";
obj.foo1();
obj.foo2()();
// window
// obj
// obj

// 错误 4
var name = "window";
function Person(name) {
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = () => {
    console.log(this.name);
  };
}
var person2 = {
  name: "person2",
  foo2: () => {
    console.log(this.name);
  },
};
var person1 = new Person("person1");
person1.foo1();
person1.foo2();
person2.foo2();
// person1
// person1 this由外层作用域决定，且指向函数定义时的this而非执行时，在这里它的外层作用域是函数Person，且这个是构造函数，并且使用了new来生成了对象person1，所以此时this的指向是person1
// window

// 错误5
var name = "window";
var obj1 = {
  name: "obj1",
  foo1: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
  foo2: () => {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  },
};
var obj2 = {
  name: "obj2",
};
obj1.foo1.call(obj2)(); // 'obj2' 'obj2'
obj1.foo1().call(obj2); // 'obj1' 'obj1'
obj1.foo2.call(obj2)(); // 'window' 'window'
obj1.foo2().call(obj2); // 'window' 'obj2'

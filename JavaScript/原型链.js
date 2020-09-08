class A {
  constructor() {
    this.valueA = true;
  }
  getValuea() {
    return valueA;
  }
}

class B {
  constructor() {
    this.valueB = false;
  }
  getValueb() {
    return valueB;
  }
}
B.prototype = new A(); //将A的实例赋值给B的原型   实现继承

class C {
  constructor() {
    this.valueC = true;
  }
  getValuec() {
    return valueC;
  }
}
C.prototype = new B(); //将B的实例赋值给C的原型   实现继承
var instanceA = new A();
var instanceB = new B();
var instanceC = new C();

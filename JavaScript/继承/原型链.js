/**
 * 原型链继承
 */
function SuperType() {
  this.super = true;
  this.getSuper = function() {
    return this.super;
  };
}
function SubType() {
  this.sub = false;
  this.getSub = function() {
    return this.sub;
  };
}
SubType.prototype = new SuperType();

const instance = new SubType();
console.log("sub:", instance.sub);
console.log("getsub:", instance.getSub);
console.log("super:", instance.super);
console.log("getSuper:", instance.getSuper);

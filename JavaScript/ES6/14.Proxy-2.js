let target = {}
let proxy = new Proxy(target, {
  getPrototypeOf(trapTarget) {
    return null;
  },
  setPrototypeOf(trapTarget, proto) {
    return false;
  }
});
let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy)
console.log(targetProto === Object.prototype) // true
console.log(proxyProto === Object.prototype)  // false
console.log(proxyProto) //null

Object.setPrototypeOf(target, {});
Object.setPrototypeOf(proxy, {});
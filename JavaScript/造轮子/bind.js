function myBind(context) {
  if (typeof context !== "function") {
    throw new TypeError();
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    } else {
      // f.bind(obj,1)(2)
      return _this.apply(context, args.concat(...arguments));
    }
  };
}

// fn.bind(obj);

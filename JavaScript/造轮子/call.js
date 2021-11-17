function myCall(context) {
  if (typeof context !== "function") {
    throw new TypeError("");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

const obj = {
  fn: function fn() {
    console.log(this);
  },
};

obj.fn.call(null); // window
obj.fn.call(undefined); // window

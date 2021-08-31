let obj = { name: "wr" };
observe(obj); // 监听
let name = obj.name; // get
obj.name = "Tars"; // set

function observe(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}

function defineReactive(obj, key, value) {
  observe(value);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log("get value");
      return value;
    },
    set(newValue) {
      console.log("set value");
      value = newValue;
    },
  });
}

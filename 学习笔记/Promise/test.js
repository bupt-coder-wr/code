const Promise = require("./promise");

new Promise((resolve, reject) => {
  console.log("begin");
  resolve(1);
}).then(
  (value) => {
    console.log("value", value);
  },
  (reason) => {
    console.log("reason", reason);
  }
);

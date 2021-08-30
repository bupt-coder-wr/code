new Promise((resolved, rejected) => {
  console.log("begin");
  resolved(1);
}).then(
  (value) => {
    console.log("value", value);
  },
  (reason) => {
    console.log("reason", reason);
  }
);

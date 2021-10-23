import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// connect 帮助封装了这一步
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// });

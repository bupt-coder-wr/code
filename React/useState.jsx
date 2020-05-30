import React, { useState } from "react";
import ReactDom from "ReactDom";
function Example() {
  const [count, setCount] = useState(0);
  return <div>count:{count}</div>;
}

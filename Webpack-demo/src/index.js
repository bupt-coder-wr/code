import _, { divide } from "lodash";
import "./style.css";

const myButton = document.createElement("button");
myButton.innerHTML = "create";
document.body.appendChild(myButton);

myButton.addEventListener("click", () => {
  const item = document.createElement("div");
  item.innerHTML = "item";
  document.body.appendChild(item);
});

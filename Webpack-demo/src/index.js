import _ from "lodash";
import printMe from "./print.js";
import logo from "./1.png";

console.log(logo);

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  const myIcon = new Image();
  myIcon.src = logo;

  element.appendChild(myIcon);
  console.log("123456");
  return element;
}

document.body.appendChild(component());

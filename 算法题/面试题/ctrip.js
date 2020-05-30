let str = "My name is x";
let array = str.split(" ");
let result = [];
for (let i = 0; i < array.length; i++) {
  console.log(array[i].length);
  if (array[i].length >= 2) {
    let tmp =
      array[i][0] + array[i].charAt(1).toUpperCase() + array[i].slice(2);
    result.push(tmp);
  } else {
    result.push(array[i]);
  }
}
console.log(result.join(' '));

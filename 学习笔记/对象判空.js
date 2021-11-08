// way 1
function isEmpty(obj) {
  for (let item in obj) return true;
  return false;
}
console.log(isEmpty({ a: 1 }));

// way 2
JSON.parse(JSON.stringify(obj)) === "{}";

// way 3
Object.keys(obj).length === 0;

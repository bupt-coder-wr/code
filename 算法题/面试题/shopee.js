var data = {
  company: {
    name: "shopee",
    location: {
      country: "china",
      city: "SZ"
    }
  },
  industry: "e-commerce"
};
function getProp(propPath) {
  // let propPath = readline();
  let result = "";
  let obj = data;
  let arr = propPath.split(".");
  for (let i = 0; i < arr.length; i++) {
    // console.log(obj);
    if (obj[arr[i]]) {
      // console.log(obj[arr[i]]);
      obj = obj[arr[i]];
      result = obj[arr[i]];
      continue;
    } else {
      return "unknown";
    }
  }
  return result;
}
let propPath = "company.name";
getProp(propPath);

/**
 * didi面试题
 */
const transformName = (strName) => {
  if (!strName.length) return;
  let arr = strName.split("_");
  if (arr.length === 1) return strName;
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i].substr(0, 1).toUpperCase();
    temp += arr[i].substr(1);
    result += temp;
  }
  return result;
};
console.log(transformName("wang_run_is_good_man"));

let str = "wang_run_is_good_man";

// 下划线转换驼峰
function toHump(name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    // letter 代表正则表达式内括号内的内容
    return letter.toUpperCase();
  });
}
console.log(toHump(str));

// 驼峰转换下划线
function toLine(name) {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}

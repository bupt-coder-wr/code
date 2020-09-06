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

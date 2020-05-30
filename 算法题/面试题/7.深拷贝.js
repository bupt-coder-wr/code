function deepClone(obj) {
  if (typeof obj !== 'object')
    return;
  let result = obj instanceof Array ? [] : {};
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      result[item] = typeof item === 'object' ? deepClone(obj[item]) : obj[item];
    }
  }
  console.log(result)
  return result;
}
deepClone({ a: 'b' })
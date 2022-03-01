// 小黑盒 二面
const obj1 = {
  a: '123',
  b: {
    c: '22',
    d: '33',
  },
  e: '333',
}
const obj2 = {
  a: '111',
  f: '123',
  b: {
    c: '111',
    h: '222',
  },
}
function mergeObject(obj1, obj2) {
  let obj = JSON.parse(JSON.stringify(obj1))
  for (let item in obj2) {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = obj2[item]
    } else {
      // 存在
      if (typeof obj1[item] === 'object') {
        // merge
        obj[item] = mergeObject(obj1[item], obj2[item])
      } else {
        // 覆盖
        obj[item] = obj2[item]
      }
    }
  }
  return obj
}
console.log(mergeObject(obj1, obj2))

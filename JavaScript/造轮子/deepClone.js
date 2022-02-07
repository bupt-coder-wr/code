function deepClone(target) {
  if (typeof target !== 'object') return target
  let result = target instanceof Array ? [] : {}
  for (const key in target) {
    console.log(key)
    result[key] = typeof key === 'object' ? deepClone(target[key]) : target[key]
  }
  return result
}

// test
let source = [1, 2, 3, { a: 1, b: 2, c: [3, 4, 5] }]
// source = { a: 1, b: 2, c: [1, 2, 3, { d: 4, e: 6 }] }
console.log(deepClone(source))

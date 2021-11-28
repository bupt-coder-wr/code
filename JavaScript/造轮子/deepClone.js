function deepClone(target) {
  if (typeof target !== "object") return target
  let result = target instanceof Array ? [] : {}
  for (const key in target) {
    result[key] = typeof key === "object" ? deepClone(target[key]) : target[key]
  }
  return result
}

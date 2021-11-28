// reduce
const flat = (array, num = 1) => {
  return
  num > 1
    ? array.reduce((pre, cur) =>
        pre.concat(Array.isArray(cur) ? flat(cur) : cur)
      )
    : array.slice()
}

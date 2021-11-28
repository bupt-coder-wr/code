// https://github.com/mqyqingfeng/Blog/issues/27

function unique(array) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    let cur = array[i]
    if (res.indexOf(cur) === -1) {
      res.push(cur)
    }
  }
  return res
}

function unique(array) {
  let res = array.filter((item, index, array) => array.indexOf(item) === index)
  return res
}

function unique(array) {
  return Array.from(new Set(array))
}

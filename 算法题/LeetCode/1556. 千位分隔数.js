var thousandSeparator = function (n) {
  let s = n.toString().split('')
  for (let i = s.length - 3; i >= 0; i = i - 3) {
    if (i) {
      s.splice(i, 0, '.')
    }
  }
  console.log(s.join(''))
}
thousandSeparator(123456789)

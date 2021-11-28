function bigNumberAdd(s, t) {
  let len = Math.max(s.length, t.length)
  s = s.padStart(len, "0")
  t = t.padStart(len, "0")
  let carry = 0
  let res = ""
  for (let i = len - 1; i >= 0; i++) {
    let val = parseInt(s[i]) + parseInt(t[i]) + carry
    res = (val % 10) + res
    carry = val >= 10 ? 1 : 0
  }
  if (carry) {
    res = "1" + res
  }
  return res
}

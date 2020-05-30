function isEmpty(obj) {
  for (let item in obj)
    return true
  return false;
}
console.log(isEmpty({a:1}))

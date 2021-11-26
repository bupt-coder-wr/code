Promise.finally = function (cb) {
  let P = this.constructor
  return this.then(
    value => {
      Promise.resolve(cb()).then(() => value)
    },
    reason => {
      Promise.resolve(cb()).then(() => {
        throw reason
      })
    }
  )
}

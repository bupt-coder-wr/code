Promise.finally = function (cb) {
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

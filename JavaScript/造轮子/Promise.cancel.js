/**
 *  字节面试：
 *  p1 = PromiseWithCancel(p)
 *  p1.cancel() => "p has been cancel"
 */
// 自己完成
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p resolve 123")
  }, 1000)
})
function PromiseWithCancel(p) {
  p.cancel = function () {
    Promise.race([p, Promise.reject()]).catch(() => {
      console.log("p has been cancel")
    })
  }
  return p
}
let p1 = PromiseWithCancel(p)
p1.cancel()

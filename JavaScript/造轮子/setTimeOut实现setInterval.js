var count = 5;
function mysetInterval(fn, millisec) {
  function interval() {
    if (count > 0) {
      setTimeout(interval, millisec)
    }

    fn()
  }
  setTimeout(interval, millisec);
}
function sayhi() {
  --count;
  console.log('hi')
}
mysetInterval(sayhi, 1000)
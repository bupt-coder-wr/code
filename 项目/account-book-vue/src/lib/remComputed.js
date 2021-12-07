const docEl = document.documentElement
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
var recalc = function() {
  var clientwidth = docEl.clientWidth
  if (!clientwidth) return false
  var fz = 100 * (clientwidth / 750) + 'px'
  docEl.style.fontSize = fz
  var realfz = window.getComputedStyle(docEl).fontSize
  if (fz !== realfz) {
    docEl.style.fontSize = `${fz.replace('px', '') *
      (fz.replace('px', '') / realfz.replace('px', ''))}px`
  }
}

window.addEventListener(resizeEvt, recalc, false)
document.addEventListener('DOMContentLoaded', recalc, false)

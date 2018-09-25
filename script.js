let d, h, m;
var timeout = 100;

window.onload = function() {
  setInterval(timeNow, timeout)
}

function addZero(i) {
  if (i < 10) { i = "0" + i }
  return i
}

function timeNow() {
  d = new Date();
  h = addZero(d.getHours());
  m = addZero(d.getMinutes());
  document.getElementById("clock").innerHTML = h + ':' + m;
}

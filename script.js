let d, h, m;
var timeout = 100;

window.onload = function() { setInterval(timeNow, timeout) }

function addZero(i) {
  if (i < 10) { i = "0" + i; }
  return i;
}

function timeNow() {
  d = new Date();
  h = addZero(d.getHours());
  m = addZero(d.getMinutes());

  document.getElementById("clock").innerHTML = h + ':' + m;
}


//quando è sera imposta lo sfondo scuro, mentre quando è giorno ritorna chiaro
$(document).ready(function() {
  d = new Date();
  h = addZero(d.getHours());
  m = addZero(d.getMinutes());

  if (h >= '21') {
    // $('body').toggleClass('dark');
    // DEBUG:
    $('body').removeClass('dark');
  }
  else if (h >= '07') {
    // $('body').removeClass('dark');
    // DEBUG:
    $('body').toggleClass('dark');
  }
});

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
$(document).ready(function() {
    $(document).on("mousedown", function(e) {
        if (e.button == 2) {
            $('body').toggleClass('dark');
            $('.container').toggleClass('dark');
            $('.clock-outer').toggleClass('dark');
            $('.links').toggleClass('dark');
            $('h1').toggleClass('dark');
            $('a:link').toggleClass('dark');
            $('a:visited').toggleClass('dark');
            $('.clock-inner').toggleClass('dark');
            return !1;
        }
        return !0;
    })
})

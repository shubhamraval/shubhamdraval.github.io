window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar1").style.transition = "300ms";
        document.getElementById("navbar1").style.height = "60px";
        document.getElementById("navbar1").style.boxShadow = "0 4px 18px 0 rgba(0,0,0,.12), 0 7px 10px -5px rgba(0,0,0,.15)"
        document.getElementById("navbar1").style.lineHeight = "60px";
        document.getElementById("navseg").style.lineHeight = "60px";
        document.getElementById("navv").style.lineHeight = "60px";
        document.getElementById("hh1").style.color = "#eeeeee";
        document.getElementById("navbar1").style.background = "#000000";
    } else {
        document.getElementById("navbar1").style.height = "90px";
        document.getElementById("navbar1").style.lineHeight = "90px";
        document.getElementById("navv").style.lineHeight = "90px";
        document.getElementById("navseg").style.lineHeight = "70px";
        document.getElementById("hh1").style.color = "#e53935";
        document.getElementById("navbar1").style.background = "transparent";
    }
}
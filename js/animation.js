var slideIndex = 1;
var timer;
$(document).ready(function () {
    new Photostack(document.getElementById('photostack-1'), {
        callback: function (item) {}
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });
    showDivs(slideIndex);
});

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    clearTimeout(timer);
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("badge");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i = i + 2) {
        dots[i].style.backgroundColor = "transparent";
        dots[i].style.color = "#D4D4D4";
    }
    x[slideIndex - 1].style.display = "block";
    //    dots[slideIndex * 2 - 1].style.backgroundColor = "white ";
    //    dots[slideIndex * 2 - 1].style.color = "black";
    dots[slideIndex * 2 - 2].style.backgroundColor = "white";
    dots[slideIndex * 2 - 2].style.color = "black";

    timer = setTimeout(function () {
        plusDivs(1)
    }, 2000);
}
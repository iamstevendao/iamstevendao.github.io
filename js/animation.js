$(document).ready(function () {
	AOS.init({
		easing: 'ease-in-out-sine'
	});

	showDivs(slideIndex);
	$('#gallery-toggle').click(function () {
		$('#gallery').toggleClass('active');
		if (firsttime) {
			new Photostack(document.getElementById('photostack-1'), {
				callback: function (item) {}
			});
			firsttime = false;
		}
	});

	$(".nav-bar ul li").click(function () {
		var pos = '';
		switch ($(this).prevAll().length) {
			case 0:
				pos = "#banner";
				break;
			case 1:
				pos = "#timeline";
				break;
			case 2:
				pos = "#interest";
				break;
			case 3:
				pos = "#projects";
				break;
		}
		$('html, body').animate({
			'scrollTop': $(pos).position().top - 80
		});

	});
});


var slideIndex = 1;
var timer;
var firsttime = true;

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

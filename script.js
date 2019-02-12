$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbarFixedTop");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

let mainNav = document.getElementById("jsMenu");
let navBarToggle = document.getElementById('jsNavbarToggle');

// navBarToggle.addEventListener("click", function () {
//     mainNav.classList.toggle("active");
// });

// $(document).ready(function () {
//     $('div.introContainer').delay(300).fadeIn(2200, "swing");
// });

// $(document).ready(function () {
//     $('img.me').delay(600).fadeIn(2200);
// });

// $(document).ready(function () {
//     $('a.downIndicator').delay(300).fadeIn(2200);
// });

// $(document).ready(function () {
//     $('nav').delay(300).fadeIn(2200);
// });

// $('#scroll').on('click', function(e) {
// 	e.preventDefault();
// 	console.log("hi")
// 	var target = $(this).attr('href');
// 	var offset = 0;
// 	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
// 	$.scrollTo(target, 300, { offset: -offset });
// });

// $('a[href*="#"]').on('click', function (el) {
//   el.preventDefault();

//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top
//   }, 500, 'swing');
// });


// $('#scroll').click(function () {
// 	$('html, body').animate({
// 	    scrollTop: ($('#scroll').offset().top)
// 	},3000);
// }

// $('#scroll').click(function () {
// 	$('html, body').animate({
// 	    scrollTop: ($('#scroll').offset().top)
// 	},200);
// }

// $('#scroll').click(function () {
// 		console.log("Hi")
// 		exit()
// 		$('html, body').animate({scrollTop: 0}, );
// 	}
// );



// document.getElementById('scroll').scrollIntoView({block: 'start', behavior: 'smooth'});

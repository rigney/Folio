$(function () {
// console.log("Hi Hana")
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// document.getElementById('scroll').scrollIntoView({block: 'start', behavior: 'smooth'});

// $('#scroll').click(
// 	function (e) {
// 		console.log("Hi")
// 		$('html, body').animate({scrollTop: $elem.height()}, 800;
// 	}
// );
  

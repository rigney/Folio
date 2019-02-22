$(function () {
  $(document).scroll("load", function () {
    var $nav = $(".navbarFixedTop");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

jQuery(window).on("load", function(){
    var $nav = $(".navbarFixedTop");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});

$(function() {
  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
		$("main").toggle("slow", function() {
		});
		$("footer").toggle("slow", function() {
		});
  });
});

$(function () {
  $('#scrollTo').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10)
})});

$(function () {
  $('#skipTo').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10)
})});

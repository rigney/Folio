$(function () {
  $(document).scroll("load", function () {
    var $nav = $(".navbarFixedTop");
    var $img = $("#imgOnScroll");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    
    // changing img
    if ($(this).scrollTop() > $nav.height()) {
    	$img.attr("src","imgs/logoBlack.svg");
    }
    else {
    	$img.attr("src","imgs/logo.svg");
    }
  });
});

jQuery(window).on("load", function(){
    var $nav = $(".navbarFixedTop");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});


// this is the function
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

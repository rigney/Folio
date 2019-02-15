$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbarFixedTop");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function() {
  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
});

$(function () {
  $('#scrollTo').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10)
})});

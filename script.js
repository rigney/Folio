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
    var $img = $("#imgOnScroll");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    if ($(this).scrollTop() > $nav.height()) {
      $img.attr("src","imgs/logoBlack.svg");
    }
    else {
      $img.attr("src","imgs/logo.svg");
    }
});

$(function() {
  $("#toggle").click(function() {
    var $img = $("#imgOnScroll");

    $(this).toggleClass("on");
    $("#resize").toggleClass("active");

    if ($("#resize").hasClass("active")) {
      console.log("hi")
      disableScroll()
    }
    else {
      enableScroll();
    }

  });
});

$(window).on('resize', function(){
  var win = $(this); //this = window
  if (win.width() > 768) { 
    enableScroll();
  }

  if (win.width() < 768 && $("#resize").hasClass("active")) {
    disableScroll();
  }
});

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

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

window.onscroll = function() { myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

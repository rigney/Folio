// showing/hiding navbar on scroll
$(function () {
  $(document).scroll("load", function () {
    var $nav = $(".navbarFixedTop");
    var $img = $("#imgOnScroll");
    var $height = $("#particle").height() - 71;
    $nav.toggleClass("scrolled", $(this).scrollTop() > 10);
    
    // showing underline on scroll when work nav link has been clicked
    if($("#goToWork").data('clicked')) {
      $nav.toggleClass("inWork", $(this).scrollTop() > 0);
    }
    if ($(this).scrollTop() > $height) {
      $("#goToWork").data('clicked', false);
      $nav.toggleClass("inWork", $(this).scrollTop() > $height);
    }
    if ($(this).scrollTop() <= $height && !$("#goToWork").data('clicked')) {
      $nav.toggleClass("inWork", $(this).scrollTop() > $height);
    }

    // changing img
    if ($(this).scrollTop() > 10) {
    	$img.attr("src","imgs/logoBlack.svg");
    }
    else {
    	$img.attr("src","imgs/logo.svg");
    }
  });
});

// changes color of toggle on scroll
$(function () {
  $(document).scroll("load", function () {
    var $toggle = $(".toggle");
    $toggle.toggleClass("scrolled", $(this).scrollTop() > 10);
  });
});

// clicking work nav link on home page
$("#goToWork").click(function() {
  $(this).data('clicked', true);
});

// showing/hiding navbar on page load
jQuery(window).on("load", function(){
    var $nav = $(".navbarFixedTop");
    var $img = $("#imgOnScroll");
    var $height = $("#particle").height() - 71;
    var $toggle = $(".toggle");

    $toggle.toggleClass("scrolled", $(this).scrollTop() > 10);
    $nav.toggleClass("scrolled", $(this).scrollTop() > 10);
    $nav.toggleClass("inWork", $(this).scrollTop() > $height);
    if ($(this).scrollTop() > 10) {
      $img.attr("src","imgs/logoBlack.svg");
    }
    else {
      $img.attr("src","imgs/logo.svg");
    }
});

// disable/enable scroll for toggling drop down menu
$(function() {
  $("#toggle").click(function() {
    var $img = $("#imgOnScroll");

    $(this).toggleClass("on");
    $("#resize").toggleClass("active");

    if ($("#resize").hasClass("active")) {
      disableScroll()
    }
    else {
      enableScroll();
    }

  });
});

// remove drop down and enable scroll when work link is clicked
$(function() {
  $("#goToWork2").click(function() {
    enableScroll();
    $("#resize").toggleClass("active");
    $("#toggle").toggleClass("on");
  });
});

// disable/enable scroll on certain width of screen
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

// scroll to content using down indicator
$(function () {
  $('#scrollTo').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10)
})});

// scroll to content using tab
$(function () {
  $('#skipTo').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10)
})});

// work nav link scroll to work section on home page
$(function () {
  $('#goToWork').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10)
})});

// work nav link in drop down scroll to work section on home page
$(function () {
  $('#goToWork2').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10)
})});

// scrolling to work section from page other than home
$(function() {
var hash= window.location.hash
if ( hash == '' || hash == '#' || hash == undefined ) return false;
      var target = $(hash);
      target = target.length ? target : $('[name=' + hash.slice(1) +']');
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top - 70 //offsets for fixed header
        }, 0);
      }
});

// scrolling to paragraphs in Larky content
$(function () {
  $('.scrollTo').click(function() {
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top - 90
  }, 10)
})});

// progress bar
if (document.getElementById("myBar") != null) {
  window.onscroll = function() { myFunction()};
}


function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};

// back to top
var previousHeight = 0;
if (document.getElementById("backToTop") != null) {
  $(window).scroll(function(event){
    var heightOfWorkIntro = document.getElementById("workIntro");
    var currentHeight = $(this).scrollTop();
    if (currentHeight > previousHeight){
      // downScroll
      if (currentHeight > heightOfWorkIntro.clientHeight - 70){
        $('#backToTop').fadeIn();
      }
    } else {
        // upscroll 
        $('#backToTop').fadeOut();
    }
    previousHeight = currentHeight;
  });
}

$(document).ready(function() {
    $("#backToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 10);
        return false;
    });

});

// work content scroll animations
var moveUpFade = {
  distance: '40px',
  origin: 'bottom',
  duration: 700,
  delay: 100,
  easing: 'ease-in-out',
  opacity: 0.0
};

var moveUpFade2 = {
  distance: '40px',
  origin: 'bottom',
  duration: 600,
  delay: 200,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade1 = {
  duration: 2000,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade2 = {
  duration: 2000,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade3 = {
  duration: 2000,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade4 = {
  duration: 2000,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade5 = {
  duration: 2000,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade6 = {
  duration: 2000,
  easing: 'ease-in-out',
  opacity: 0.0
};


ScrollReveal().reveal('.hideMe', moveUpFade);
ScrollReveal().reveal('.hideMe2', moveUpFade2);
ScrollReveal().reveal('.introFade1', introFade1);
ScrollReveal().reveal('.introFade2', introFade2);
ScrollReveal().reveal('.introFade3', introFade3);
ScrollReveal().reveal('.introFade4', introFade4);
ScrollReveal().reveal('.introFade5', introFade5);
ScrollReveal().reveal('.introFade6', introFade6);
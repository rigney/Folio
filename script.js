// scrolling to work section from page other than home
$(window).bind("load", function() { 
  var hash= window.location.hash;
  console.log(window.location.hash)
  if ( hash == '' || hash == '#' || hash == undefined ) return false;
  var target = $(hash);
  target = target.length ? target : $('[name=' + hash.slice(1) +']');
  if (target.length) {
    $('html,body').stop().animate({
      scrollTop: target.offset().top - 70 //offsets for fixed header
    }, 0);
  }
});

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

// $(".card").mouseover(function () {
//    $("#larkyPreview").attr("src", "imgs/larkyPreviewHover.svg")
// }).mouseout(function () {
//     $("#larkyPreview").attr("src", "imgs/larkyPreview.svg")
// });

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
$(window).on("load", function(){
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
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");

    if ($("#resize").hasClass("active")) {
      disableScroll();
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
  }, 10);
  });
});

// scroll to content using tab
$(function () {
  $('#skipTo').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10);
  });
});

// work nav link scroll to work section on home page
$(function () {
  $('#goToWork').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10);
  });
});

// work nav link in drop down scroll to work section on home page
$(function () {
  $('#goToWork2').click(function() {
  $('html, body').animate({
    scrollTop: $("#scrolledTo").offset().top - 70
  }, 10);
  });
});

// scrolling to paragraphs in Larky content
$(function () {
  $('.scrollTo').click(function() {
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top - 90
  }, 10);
  });
});

// progress bar
if (document.getElementById("myBar") != null) {
  window.onscroll = function() { 
    myFunction();
  };
}


function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// back to top
var previousHeight = 0;
if (document.getElementById("backToTop") != null) {
  $(window).scroll(function(event) {
    var heightOfWorkIntro = document.getElementById("workIntro");
    var currentHeight = $(this).scrollTop();
    if (currentHeight > previousHeight) {
      // downScroll
      if (currentHeight > heightOfWorkIntro.clientHeight - 70){
        $('#backToTop').fadeIn();
      }
    } 
    else {
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
  distance: '30px',
  origin: 'bottom',
  duration: 700,
  delay: 100,
  easing: 'ease-in-out',
  opacity: 0.0
};

var moveUpFade2 = {
  distance: '30px',
  origin: 'bottom',
  duration: 600,
  delay: 200,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade1 = {
  duration: 1500,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade2 = {
  duration: 2000,
  delay: 100,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade3 = {
  duration: 2000,
  delay: 150,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade4 = {
  duration: 2000,
  delay: 200,
  easing: 'ease-in-out',
  opacity: 0.0
};

var introFade5 = {
  duration: 2000,
  delay: 250,
  easing: 'ease-in-out',
  opacity: 0.0
};

var homeFade1 = {
  duration: 800,
  easing: 'ease-in-out',
  opacity: 0.0
};

var homeFade2 = {
  duration: 1000,
  delay: 600,
  easing: 'ease-in-out',
  opacity: 0.0
};

var cardFade = {
  duration: 1000,
  easing: 'ease-in-out',
  opacity: 0.0
};

var aboutFade = {
  duration: 2000,
  easing: 'ease-in-out',
  opacity: 0.0
};

var aboutFade2 = {
  duration: 2000,
  delay: 200,
  easing: 'ease-in-out',
  opacity: 0.0
};

var aboutFade3 = {
  duration: 2000,
  delay: 400,
  easing: 'ease-in-out',
  opacity: 0.0
};

var photographFade = {
  duration: 1400,
  delay: 700,
  easing: 'ease-in-out',
  opacity: 0.0
};


$(function () {
  ScrollReveal().reveal('.hideMe', moveUpFade);
  ScrollReveal().reveal('.hideMe2', moveUpFade2);

  ScrollReveal().reveal('.introFade1', introFade1);
  ScrollReveal().reveal('.introFade2', introFade2);
  ScrollReveal().reveal('.introFade3', introFade3);
  ScrollReveal().reveal('.introFade4', introFade4);
  ScrollReveal().reveal('.introFade5', introFade5);

  ScrollReveal().reveal('.helloText', homeFade1);
  ScrollReveal().reveal('.bioText', homeFade2);

  ScrollReveal().reveal('.cards', cardFade)

  ScrollReveal().reveal('.aboutText', aboutFade)
  ScrollReveal().reveal('.aboutText2', aboutFade2)
  ScrollReveal().reveal('.aboutText3', aboutFade3)
  ScrollReveal().reveal('.mePhotograph', photographFade)
  ScrollReveal().reveal('.careerFade1', aboutFade)
  ScrollReveal().reveal('.careerFade2', aboutFade2)
  ScrollReveal().reveal('.careerFade3', aboutFade3)
});

// slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// slideshow2
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var k;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (k = 0; k < slides2.length; k++) {
      slides2[k].style.display = "none";  
  }
  for (k = 0; k < dots2.length; k++) {
      dots2[k].className = dots2[k].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
}
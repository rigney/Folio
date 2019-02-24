// $open = document.getElementById('toggle');
// $close = document.getElementById('toggle');
// $modal = document.getElementById('resize');

// function open() {
//   scrollLock.hide(); //hide body scrollbar
//   $modal.style.display = 'block';
// }

// function close() {
//   $modal.style.display = 'none';
//   scrollLock.show(); //show body scrollbar
// }

// $open.addEventListener('click', open);
// $close.addEventListener('click', close);



// var bool = 0; // On créé un booléen pour faire un switch juste après
// document.getElementById("toggle").addEventListener("click", function() { // Il faut écouter l'event click sur l'interrupteur
//   switch(bool) { 
//     case 0: document.querySelector("html").style.overflow = "hidden"; bool=1;break; 
//     default: document.querySelector("html").style.overflow = "initial"; bool=0;break;
//   } // Il suffit de switcher .style.overflow entre "hidden" et "initial" sur le <html> et changer la valeur du bool. 
// });
/* BONUS :
- En jQuery, ça ressemble à ça : 
      var toggle = 0;
      $("#lock").click(function() {
        switch(toggle){
          case 0: $("html").css("overflow","hidden"); toggle=1; break;
          default: $("html").css("overflow","initial"); toggle=0; break;
        }
      });
*/
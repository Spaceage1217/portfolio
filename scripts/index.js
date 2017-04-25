/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

$(document).ready(function(){
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
  
  $(".myBox").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
   $(".myBox-2").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
  
});


console.log("JavaScript is amazing!");

$(document).ready(function(){
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
    triggerElement:'#two'
  })
  .setClassToggle('#two','fade-in') //add class to one
  .addTo(controller);


});

$( document ).ready(function() {

    $('.nav-wrapper').hide();
    $('.nav-wrapper').fadeIn(10000);






 
   
});





  anime({
    targets: '.grid',
    translateY: [
      { value: -100, duration: 1000 },
      { value: 200, duration: 550},
      { value: 0, duration: 600}
    ],
    duration: 10000,
    loop: false,
  });
  anime({
    targets: '#navbar',
    translateY: [
      { value: -100, duration: 1000 },
      { value: 150, duration: 550},
      { value: 0, duration: 600}
    ],
    duration: 10000,
    loop: false,
  });
















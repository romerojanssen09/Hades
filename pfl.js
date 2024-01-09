$(document).ready(function(){
    $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
    
    $(window).on('scroll load',function(){
    
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');  
    });     
    });
});


const swiper = new Swiper('.swiper', {
    autoplay: {
      delay:2000,
      disableOnInteraction:false,
    },
    loop: true,
  
  
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });
"use strict";


$(function() {
  if (window.matchMedia( '(min-width: 800px)' ).matches) {

    $('.inview-slide-left').on('inview', function(event, isInView) {
      if(isInView){
        $(this).addClass('slide-left');
      }
      });
      $('.inview-slide-right').on('inview', function(event, isInView) {
        if(isInView){
        $(this).addClass('slide-right');
      }
      });
  } else {
    $('.inview-slide-left').on('inview', function(event, isInView){
      $(this).removeClass('slide');
    })
    $('.inview-slide-right').on('inview', function(event, isInView){
      $(this).removeClass('slide');
    })
  }
});




  


  


  function EachTextAnimeControl(){
    $('.eachTextAnime').each(function(){
      var elempos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll >= elempos - windowHeight){
        $(this).addClass("appeartext");
      } else {
        $(this).removeClass("appeartext");
      }
    });
  }

  $(window).scroll(function(){
    EachTextAnimeControl();
  });

  $(window).on('load', function(){
    var element = $(".eachTextAnime");
    element.each(function(){
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function(t, i){
        if (t !== " "){
          if(i < 10){
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          }else {
            var n = i / 10 ;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
    EachTextAnimeControl();
  })


  $('#imageList img').hover(function(){
    $('#mainImage img').attr('src', $(this).attr('src'));
  });
 $('.product').hover(function(){
   var newText = $(this).text();
   $('#mainImage p').text(newText);
 });


 var appear = false;
 var pagetop = $('#page_top');
 $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {  
     if (appear == false) {
       appear = true;
       pagetop.stop().animate({
         'bottom': '50px' //?????????50px????????????
       }, 300); //0.3?????????????????????
     }
   } else {
     if (appear) {
       appear = false;
       pagetop.stop().animate({
         'bottom': '-70px' //?????????-50px????????????
       }, 300); //0.3?????????????????????
     }
   }
 });
 pagetop.click(function () {
   $('body, html').animate({ scrollTop: 0 }, 500); //0.5??????????????????????????????
   return false;
 });



// ??????????????????????????????

$(function() {
  $('.btn-gNav').on("click", function(){

    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

});

// ????????????????????????????????????????????????????????????
$(function() {
  $('.gNav-menu li a').on("click", function(){
     $('#gNav').removeClass('open');
  });
});


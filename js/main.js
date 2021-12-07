"use strict";

$(function(){
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
         'bottom': '50px' //下から50pxの位置に
       }, 300); //0.3秒かけて現れる
     }
   } else {
     if (appear) {
       appear = false;
       pagetop.stop().animate({
         'bottom': '-70px' //下から-50pxの位置に
       }, 300); //0.3秒かけて隠れる
     }
   }
 });
 pagetop.click(function () {
   $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
   return false;
 });


});


// scroll
$(function() {
  $('a[href^="#"]').click(function() {
      let speed = 500;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });
});

// page scroll
var current;
$.scrollify({
    section: ".box",
    setHeights: false,
    before:function(i,box){
        current = i;
    },
    scrollSpeed: 1200,
});
$(window).on('resize',function(){
    if(current){
        var currentScrl = $('.box').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
    }
});



// scroll
$(function() {
  $('a[href^="#"]').click(function() {
      const speed = 500;
      const href = $(this).attr("href");
      const target = $(href == "#" || href == "" ? 'html' : href);
      const position = target.offset().top;

      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
  });
});

// page scroll
let current;
$.scrollify({
    section: ".box",
    setHeights: false,
    before: function(i) { current = i; },
    scrollSpeed: 1200,
});

$(window).on('resize',function(){
    if (current) {
        var currentScrl = $('.box').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
    }
});



  $(window).scroll(function () {
    var currentPosition = $(window).scrollTop();
    // console.log(currentPosition);
    let introDistance = $("#intro").offset();
    let memberDistance = $("#member").offset();
    let productDistance = $("#product").offset();
    let contactDistance = $("#contact").offset();
    let footerDistance = $("footer").offset();

    if (currentPosition > footerDistance.top - 100) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");
        //scroll bar
        $(".scroll").css("display","none");

    } else if (footerDistance.top -20 > currentPosition && currentPosition > contactDistance.top - 100) {
        // $(".contact_nav").toggleClass(".hoverd");
        $(".contact_nav").css("background-color", "#58E4A8");
        $(" #main_nav > a:eq(3)").css("color", "#FFFFFF");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");
        //scroll bar
        $(".header_scroll").css("display","none");
        $(".main_scroll").css("display","inline");
        $(".main_scroll").attr("href","#footer");

    } else if (contactDistance.top - 20 > currentPosition && currentPosition > productDistance.top - 100) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "#FFDF3F");
        $(" #main_nav > a:eq(2)").css("color", "#FFFFFF");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");
        //scroll bar
        $(".header_scroll").css("display","none");
        $(".main_scroll").css("display","inline");
        $(".main_scroll").attr("href","#contact");

    } else if (productDistance.top - 20 > currentPosition && currentPosition > memberDistance.top - 100) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "#63B1FF");
        $(" #main_nav > a:eq(1)").css("color", "#FFFFFF");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");
        //scroll bar
        $(".header_scroll").css("display","none");
        $(".main_scroll").css("display","inline");
        $(".main_scroll").attr("href","#product");

    } else if (memberDistance.top - 20 > currentPosition && currentPosition > introDistance.top - 100) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "#FA5D36");
        $(" #main_nav > a:eq(0)").css("color", "#FFFFFF");
        //scroll bar
        $(".header_scroll").css("display","none");
        $(".main_scroll").css("display","inline");
        $(".main_scroll").attr("href","#member");
        
    } else if (introDistance.top - 20 > currentPosition) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");
        //scroll bar
        $(".header_scroll").css("display","inline");
        $(".main_scroll").css("display","none");

    };
});

$(function(){
    $('#nav_toggle').click(function(){
                $("header").toggleClass('open');
        $("header nav").fadeToggle(500);
            });

});

// (function () {
//     let intoroDistance = $("#intoro").offset();
//     let memberDistance = $("member").offset();
//     let productDistance = $("product").offset();
//     let contactDistance = $("#contact").offset();
//     let footerDistance = $("#footer").offset();
//     navCheck = () => {
//         let currentPosition = $(window).scrollTop();
//         if (footerDistance.top > currentPosition >= contactDistance.top) {
//             $(".contact_nav").css("width", "90%");
//         } else if (contactDistance.top > currentPosition >= productDistance.top) {
//             $(".product_nav").css("width", "90%");
//         } else if (productDistance.top > currentPosition >= memberDistance.top) {
//             $(".member_nav").css("width", "90%");
//         } else if (memberDistance.top > currentPosition >= intoroDistance.top){
//             $(".intoro_nav").css("width","90%");      
//         };
//     }
// }());

// navCheck = () => {
//     let currentPosition = $(window).scrollTop();
//     if (footerDistance > currentPosition >= contactDistance) {
//         $(".contact_nav").css("width", "90%");
//     } else if (contactDistance > currentPosition >= productDistance) {
//         $(".product_nav").css("width", "90%");
//     } else if (productDistance > currentPosition >= memberDistance) {
//         $(".member_nav").css("width", "90%");
//     } else if (memberDistance > currentPosition >= intoroDistance){
//         $(".intoro_nav").css("width","90%");      
//     };
// }


$(window).scroll(function () {
    var currentPosition = $(window).scrollTop();
    // console.log(currentPosition);
    let introDistance = $("#intro").offset();
    let memberDistance = $("#member").offset();
    let productDistance = $("#product").offset();
    let contactDistance = $("#contact").offset();
    let footerDistance = $("footer").offset();

    if (currentPosition > footerDistance.top - 20) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");


    } else if (footerDistance.top -20 > currentPosition && currentPosition > contactDistance.top - 20) {
        // $(".contact_nav").toggleClass(".hoverd");
        $(".contact_nav").css("background-color", "#58E4A8");
        $(" #main_nav > a:eq(3)").css("color", "#FFFFFF");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");

    } else if (contactDistance.top - 20 > currentPosition && currentPosition > productDistance.top - 20) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "#FFDF3F");
        $(" #main_nav > a:eq(2)").css("color", "#FFFFFF");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");

    } else if (productDistance.top - 20 > currentPosition && currentPosition > memberDistance.top - 20) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "#63B1FF");
        $(" #main_nav > a:eq(1)").css("color", "#FFFFFF");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");

    } else if (memberDistance.top - 20 > currentPosition && currentPosition > introDistance.top - 20) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "#FA5D36");
        $(" #main_nav > a:eq(0)").css("color", "#FFFFFF");

    } else if (introDistance.top - 20 > currentPosition) {
        $(".contact_nav").css("background-color", "");
        $(" #main_nav > a:eq(3)").css("color", "");
        $(".product_nav").css("background-color", "");
        $(" #main_nav > a:eq(2)").css("color", "");
        $(".member_nav").css("background-color", "");
        $(" #main_nav > a:eq(1)").css("color", "");
        $(".about_nav").css("background-color", "");
        $(" #main_nav > a:eq(0)").css("color", "");
    };
});


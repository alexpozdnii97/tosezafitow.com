$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.navBar_menu').toggleClass('active')
    })
})


if (window.matchMedia("(max-width: 992px)").matches) {
    $('.subBlogPostSectionMobile').slick({
     dots: false,
     infinite: true,
     speed: 300,
     arrows: true,
     slidesToShow: 1,
     slidesToScroll: 1,
 });
} 

$(document).ready(function() {
    $('.tableNav').click(function(event) {
        $('.sabMenu,.tableOfContentArrow').toggleClass('active')
    })
})
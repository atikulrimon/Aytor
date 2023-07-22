$(function(){
 $(".shopDetailsThum").slick({
    arrows: false,
    asNavFor:".shopDetailsThumNav",
    fade:true,
    
 });

 $(".shopDetailsThumNav").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor:".shopDetailsThum",
    focusOnSelect: true,
    centerMode: true,
    centerPadding: 0,
    
 });

 $('.reletedProductContent').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
   arrows: false
 });

})
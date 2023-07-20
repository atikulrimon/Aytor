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


})
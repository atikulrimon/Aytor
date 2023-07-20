$(window).on('load',function(){
    $('#preloader').hide();
  })

$(function(){
  // Common Js Start
  $('button').on('click',function(){
    return false
  })
  // Common Js End  
  
  //Banner Slick Start Here
    $('.bannerSlider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        dots: true,
        dotsClass: 'bannerSliderDots'
        
      });
    // Banner Slick End

    // Newsletter Popup Start
      setTimeout(function(){
        document.querySelector('#newsletter').style.transform ='scale(1)'
      },2000)

      function newsPopUpClose(){
        document.querySelector('#newsletter').style.transform = 'scale(0)'
      }
      
      document.querySelector('.newsletterClose').addEventListener('click',newsPopUpClose)

      $("#newsletter").click(function(){
        
      });
    // Newsletter Popup End

    // Back TO Top Start
    $(window).on('scroll', function(){
      let scrollTopSize = $(this).scrollTop();
      
      if(scrollTopSize > 500){
        $('.backToTopBtn').show(500);
      }else{
        $('.backToTopBtn').hide(500);
      }
    })
    $('.backToTopBtn').on('click', function(){
        $('body,html').animate({
          scrollTop: 0
        },1000)
    })
  // Back TO Top End

})
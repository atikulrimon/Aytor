// Common Js Start
  
  // Preloader Start
  $(window).on('load',function(){
  $('#preloader').hide();
  })
  // Preloader End

  // Mini Cart Sidebar Start
  navCart = document.querySelector(".shopBag")
  miniCartSide = document.querySelector("#shopingSidemenu")
  miniCartClose = document.querySelector(".CartSideClose")

  navCart.addEventListener("click", function(){
    miniCartSide.style.transform= 'scaleX(1)'
    miniCartSide.style.opacity ='1'
  })

  miniCartClose.addEventListener("click", function(){
    miniCartSide.style.transform= 'scaleX(0)'
    miniCartSide.style.opacity ='0'
  })

  // Mini Cart Sidebar End


  // Mobile Menu Start
  let mobileMenuIcon = document.querySelector(".navResponBtn");
  let mobileMenu = document.querySelector('#mobileMenu');
  let menuSide = document.querySelector(".menuSide");
  mobileMenuIcon.addEventListener('click', function(){
    mobileMenu.style.transform ='scaleX(1)'
    menuSide.style.transform ='scaleX(1)'
  })
  
  
  document.querySelector(".mobilmenuHide").addEventListener("click",function(){
    mobileMenu.style.transform ='scaleX(0)'
    menuSide.style.transform ='scaleX(0)'
  })
  // Mobile Menu End
  


  $(function(){

  $('button').on('click',function(){
    return false
  })

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

  // Product Item Tooltip

  const tooltipTriggerList = document.querySelectorAll('.tooltipHoverText')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  // Video Play Spacial Offer Section (VenoBox) Start
  new VenoBox({
    maxWidth: '80%',
  });
  // Video Play Spacial Offer Section (VenoBox) End


// Common Js End

// Index file js Start

$(function(){


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

    
      

    // Tooltip Bootstrap
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)) 
      
    // Arrivals Product Silder
      $('.arrivals_slider').slick({
          slidesToShow: 4,
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: `<i class="fa-solid fa-chevron-left arrivalSliderArrow"></i>`,
          nextArrow: `<i class="fa-solid fa-chevron-right arrivalSliderArrow"></i>`,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false,
                autoplay: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                autoplay: true
              }
            }
          ]
  
      })

      // coundown Js
      $('#dealclock').countdown('2023/12/31', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div><span class="d-block">%D</span><span class="d-block">Day</span></div> '
          + '<span class="dateColon">:</span>'
          + '<div><span class="d-block">%H</span><span class="d-block">Hour</span></div> '
          + '<span class="dateColon">:</span>'
          + '<div><span class="d-block">%M</span><span class="d-block">Minute</span></div> '
          + '<span class="dateColon">:</span>'
          + '<div><span class="d-block">%S</span><span class="d-block">Sec</span></div>'
          ));
      });

       // Deals Slider
       $('.dealSliderItem').slick({
        slidesToShow: 2,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'dealsSliderDots',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });


      
      // Blog Slider
      $('.blogSlide').slick({
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        dotsClass: 'blogSliderDots',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      })


      // Video Play Spacial Offer Section (VenoBox) Start
      new VenoBox({
        maxWidth: '80%',
      });
      // Video Play Spacial Offer Section (VenoBox) End

      
})

// Index file js End


// About JS Start

  // Team Section Js Start
  $(function(){
  $('.teamItem').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<i class="fa-solid fa-chevron-left teamItemSlideArrows"></i>`,
    nextArrow: `<i class="fa-solid fa-chevron-right teamItemSlideArrows"></i>`,
  })

  $('.aytorInstaItem').slick({
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false
    
  })

  
  })
  // Team Section Js End
  
// About JS End


// Blog Page JS Start

$('.blogContentImgSlide').slick({
  slideToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
})

// Blog Page Js End


// Cart Page JS Start


$(function(){
  $(".qualityCart").on("click", function (e) {
    let targetElement = $(e.target).data("behaviour");

    if (targetElement == "increment") {
        let cartFieldValue = $(this).children("input").val();
        cartFieldValue++;
        $(this).children("input").val(cartFieldValue);
        
    } else if (targetElement == "decrement") {
        let cartFieldValue = $(this).children("input").val();
        cartFieldValue--;
        $(this).children("input").val(cartFieldValue <= 1 ? "1" : cartFieldValue);
    } else {
       return false
    }
  });
})


// let qualityCart = document.querySelector('.qualityCart');

// qualityCart.addEventListener('click',function(){
  
//   let targetElement = qualityCart.e.taget.data("behaviour");

//   if(targetElement == "increment"){
//     let cartFieldValue = qualityCart.children("input").value;

//     cartFieldValue++
//     qualityCart.children("input").value(cartFieldValue);

//   }
  
//   else if(targetElement == "decrement"){
//     let cartFieldValue = qualityCart.children("input").value;

//     cartFieldValue--
//     qualityCart.children("input").value(cartFieldValue <= 1? "1" : cartFieldValue);
//   }
//   else{
//     return false
//   }

// })

// Cart Page JS End


// Chackout pages Js Start

$(function(){

  // Order list Js Start
    function increment(){
    let cartFiled = document.querySelector('.qualityInput')
    cartFiled.value++
  }
  $('.qualityBtnincrement').on('click', increment)

  function decrement(){
    let cartFiled = document.querySelector('.qualityInput')
    
    
    if(cartFiled.value <= 1){
      cartFiled.value = 1;
    }else{
      cartFiled.value--
    }

    cartFiled.value <= 1 ? cartFiled.value = 1 : cartFiled.value--
  }
  $('.qualityBtndecrement').on('click', decrement)


  
  // $(".qualityCart").on("click", function (e) {
  //   let targetElement = $(e.target).data("behaviour");

  //   if (targetElement == "increment") {
  //       let cartFieldValue = $(this).children("input").val();
  //       cartFieldValue++;
  //       $(this).children("input").val(cartFieldValue);
        
  //   } else if (targetElement == "decrement") {
  //       let cartFieldValue = $(this).children("input").val();
  //       cartFieldValue--;
  //       $(this).children("input").val(cartFieldValue <= 1 ? "1" : cartFieldValue);
  //   } else {
  //      return false
  //   }
  // });

  // Order list Js End

})
// Checkout Pages JS end

// Compare Pages JS Start
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

// Compare Js Page END


// Shop Page Js STart

$(function(){
  $('.shopListBtn').on('click',function(){
      $(".shopProductBoxGrid").css("display", "none");

      $(".shopProductBoxList").css("display", "block");
      
      $(".shopListBtn").css("background-color","#FF6F61")
      $(".shopGridBtn").css("background-color","#000")
      

  })

  $('.shopGridBtn').on('click',function(){
      $(".shopProductBoxGrid").css("display", "block");

      $(".shopProductBoxList").css("display", "none");

      $(".shopGridBtn").css("background-color","#FF6F61")
      $(".shopListBtn").css("background-color","#000")
  })
})

// Shop Page JS ENd


// ShopDetails JS Start
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

//  ShopDetails JS End


// Wishlist Pages JS Start
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

// Wishlist Js End


 


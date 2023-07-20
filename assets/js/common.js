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
          // setTimeout(function(){
          //   document.querySelector('#newsletter').style.transform ='scale(1)'
          // },2000)
    
          // function newsPopUpClose(){
          //   document.querySelector('#newsletter').style.transform = 'scale(0)'
          // }
          
          // document.querySelector('.newsletterClose').addEventListener('click',newsPopUpClose)
    
          // $("#newsletter").click(function(){
            
          // });
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
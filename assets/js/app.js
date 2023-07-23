

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




 


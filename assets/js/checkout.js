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
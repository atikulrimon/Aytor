

// $(function(){
//   $(".qualityCart").on("click", function (e) {
//     let targetElement = $(e.target).data("behaviour");

//     if (targetElement == "increment") {
//         let cartFieldValue = $(this).children("input").val();
//         cartFieldValue++;
//         $(this).children("input").val(cartFieldValue);
        
//     } else if (targetElement == "decrement") {
//         let cartFieldValue = $(this).children("input").val();
//         cartFieldValue--;
//         $(this).children("input").val(cartFieldValue <= 1 ? "1" : cartFieldValue);
//     } else {
//        return false,
//     }
//   });
// })


let qualityCart = document.querySelector('.qualityCart');

qualityCart.addEventListener('click',function(){
  
  let targetElement = qualityCart.e.taget.data("behaviour");

  if(targetElement == "increment"){
    let cartFieldValue = qualityCart.children("input").value;

    cartFieldValue++
    qualityCart.children("input").value(cartFieldValue);

  }
  
  else if(targetElement == "decrement"){
    let cartFieldValue = qualityCart.children("input").value;

    cartFieldValue--
    qualityCart.children("input").value(cartFieldValue <= 1? "1" : cartFieldValue);
  }
  else{
    return false
  }

})
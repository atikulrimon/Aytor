let shopGridBtn = document.querySelector(".shopGridBtn")
let shopListBtn = document.querySelector(".shopListBtn")
let shopProductBoxGrid = document.querySelector(".shopProductBoxGrid")
let shopProductBoxList = document.querySelector(".shopProductBoxList")

shopGridBtn.addEventListener("click", function(){
  shopProductBoxGrid.style.display = "show(1000)";
  shopProductBoxList.style.display - "hide()"
})

shopListBtn.addEventListener("click", function(){
  shopProductBoxGrid.style.display = "hide()";
  shopListBtn.classList.add(".shopProduct_active")
  shopProductBoxList.style.display = "show(1000)"
})
$(function(){
    $('.shopListBtn').on('click',function(){
        $(".shopProductBoxGrid").css("display","none")

        $(".shopProductBoxList").css("display","block")
        
        $(".shopListBtn").css("background-color","#FF6F61")
        $(".shopGridBtn").css("background-color","#000")
        

    })

    $('.shopGridBtn').on('click',function(){
        $(".shopProductBoxGrid").css("display","block")

        $(".shopProductBoxList").css("display","none")

        $(".shopGridBtn").css("background-color","#FF6F61")
        $(".shopListBtn").css("background-color","#000")
    })
})
$(document).ready(function(){
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");
    
    $(window).scroll(function(){
    var scroll=$(this).scrollTop();
    
    for(var i=0; i<5; i++){
    $("section>article").eq(i).css({"transform":"translateZ("+parseInt((-5000*i)+scroll)+"px)"});

    if(scroll=>i*5000 && scroll<(i+1)*5000){
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(i).addClass("on");
        $("article").removeClass();
        $("article").eq(i).addClass("on");
        };
        };
    });
    
    
    $(".scrollNavi li").on("click",function(){
    var a=$(this).index();
    $("body,html").stop().animate({"scrollTop":5000*a},1500,"swing");
    });
       
    
    $("body").on("mousemove",function(e){
        var posX=e.pageX/100;
        var posY=e.pageY/150;
        
        $(".obj11").css({left:350-posX, bottom:70-posY});
        $(".obj12").css({left:-593+posX, bottom:-85+posY});
        $(".obj13").css({left:-100+posX, bottom:-20+posY});
        
        $(".obj21").css({right:-710-posX, bottom:-420-posY});
        $(".obj22").css({right:-50+posX, bottom:-100+posY});
        
        $(".obj31").css({right:110-posX, bottom:70-posY});
        $(".obj32").css({left:100-posX, bottom:-160+posY});
        
        $(".obj41").css({left:350+posX, bottom:-150-posY});
        $(".obj42").css({right:167+posX, top:-255-posY});
    });   
    
}) //end
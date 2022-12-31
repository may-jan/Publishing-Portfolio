$(document).ready(function(){
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");
    
    $(window).scroll(function(){
    var scroll=$(this).scrollTop();
    
    for(var i=0; i<5; i++){
    $("section>article").eq(i).css({"transform":"translateZ("+parseInt((-5000*i)+scroll)+"px)"});
    };

if(scroll>=0 && scroll<5000) {
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(0).addClass("on");
        $("article").removeClass();
        $("article").eq(0).addClass("on");
    }
    if(scroll>=5000 && scroll<10000) {
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(1).addClass("on");
        $("article").removeClass();
        $("article").eq(1).addClass("on");
    }    
    if(scroll>=10000 && scroll<15000) {
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(2).addClass("on");
        $("article").removeClass();
        $("article").eq(2).addClass("on");
    }    
    if(scroll>=15000 && scroll<20000) {
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(3).addClass("on");
        $("article").removeClass();
        $("article").eq(3).addClass("on");
    } 
    });  

    
    
    $(".scrollNavi li").on("click",function(){
    var a=$(this).index();
    $("body,html").stop().animate({"scrollTop":5000*a},1500,"swing");
    });
       

    $("body").on("mousemove",function(e){
        var posX=e.pageX/100;
        var posY=e.pageY/150;
        
        $(".obj11").css({left:630-posX, bottom:10+posY});
        
        $(".obj21").css({left:190-posX, bottom:5+posY});
        
        $(".obj31").css({left:630-posX, bottom:-30+posY});
 
        $(".obj41").css({left:610-posX, bottom:-125+posY});
    });   
  
}) //end